// express y nest.js
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const { getUsuario,loginUsuario,registrarUsuario,verificarToken } = require('./middleware')
const bcrypt = require('bcrypt')


const cors = require('cors')
const { loginUsuarios } = require('./consultas');
app.listen(3000, console.log('servidor en marcha en el puerto 3000'))
app.use(cors())
app.use(express.json())

app.post('/login',async(req,res)=>{
    try {
        const {email, password} = req.body
        const datos = await loginUsuario(email,password)
        if(datos){
            const token = jwt.sign({ email },'clave secreta')
            res.send({token,datos})
        }else{
            res.status(500).send('Lo siento hay un error revise sus credenciales!');
        }
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error.message ||'Ocurrió un error')
    }
})

app.get('/usuarios', verificarToken, async(req,res)=> {
    try {
        const token = req.header("Authorization").split("Bearer ")[1]
        const {email} = jwt.decode(token)
        const datosUsuario = await getUsuario(email)
        res.send(datosUsuario)
    } catch (error) {
        console.log(error)
    }
})

app.post('/usuarios', async (req,res) => {

    try {
        const {nombre,email,ciudad,password} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10)
        const respuesta = await registrarUsuario(nombre,email,ciudad,hashedPassword)
    if (respuesta) {
        res.status(200).send('Usuario se agregó exitosamente')
    } else {
        res.status(500).send('Usuario no se agregó hubo un error ¿llenó todos los campos?')
    }
        
    } catch (error) {
        res.status(500).send('Usuario no se agregó hubo un error ¿llenó todos los campos?')
    }
    
            
})