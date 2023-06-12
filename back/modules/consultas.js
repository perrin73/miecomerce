const { Pool } = require('pg')
const bcrypt = require('bcrypt')

const config = {
    host: 'localhost',
    user: 'vinil_user',
    password: 'Romi2000',
    database: 'vinilstore',
    allowExitOnIdle: true,
}

const pool = new Pool(config)

const registrarUsuarioDB = async (nombre,email,ciudad,password) => {
    
    try {
        const values = [nombre,email,ciudad,password]
        const query = "INSERT INTO usuario values (DEFAULT, $1, $2, $3, $4)"
        await pool.query(query, values)
        
    } catch (error) {
       console.log(error);
       return false
    }
    return true
}

const loginUsuarioDB = async (email, password) => {
    const values = [email]
    const query = "SELECT * FROM usuario where email = $1"
    const {rows:[usuario],rowCount} = await pool.query(query, values)
    const {password: hashedPassword} = usuario
    
    const passwordEsIgual = bcrypt.compareSync(password, hashedPassword)
    if(passwordEsIgual){
		const {data} = await getUsuarioDB(email)
		delete data.password
		return data}
	else{
		return false;}
}

const getUsuarioDB = async (email) => {
    try {
        const values = [email]
        const query = "SELECT * FROM usuario where email = $1"
        const { rows } = await pool.query(query, values);
        return {data: rows[0]};
    } catch (error) {
       console.log(error);
       return false 
    }
    
    
    }


 module.exports = { getUsuarioDB, registrarUsuarioDB, loginUsuarioDB };