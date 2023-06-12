const jwt = require("jsonwebtoken")
const {getUsuarioDB, registrarUsuarioDB,loginUsuarioDB } = require('./consultas')

const verificarToken = (req, res, next) => {
    const token = req.header("Authorization").split("Bearer ")[1]
    if(!token) throw { 
        code: 401,
        message: "Debes incluir token en el header"
    }
    const tokenValido = jwt.verify(token, 'clave secreta')
    if(!tokenValido) throw { 
        code: 401,
        message: "El token no es válido"
    }
    next()
}

const loginUsuario = async(email,password)=>{
    if(!email || !password){
        return false;
    }else{
        try {
            const result = await loginUsuarioDB(email,password)
            return result
                
          } catch (error) {
            return false  
          }
        
    }
    
    
}

const getUsuario = async(email)=>{
    if(!email){
        return false
    }else{
        try {
            
          const datosUsuario = await getUsuarioDB(email)
          return datosUsuario.data;
        } catch (error) {
          return false  
        }

        
    }
    
}

const registrarUsuario = async(nombre,email,ciudad,password)=>{
    if(!email || !password || !nombre || !ciudad){
        return false
    }else{
        try {
            await registrarUsuarioDB(nombre,email,ciudad,password)
        } catch (error) {
          return false  
        }
    }
    return true;
}

module.exports = {getUsuario, loginUsuario,registrarUsuario,verificarToken}