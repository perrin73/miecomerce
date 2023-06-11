import {Form,Button,Alert} from 'react-bootstrap/';
import { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import contextVinil from '../contexto/ContextVinil';

function LoginForm() {

  

  const {usuario,setUsuario} = useContext(contextVinil);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');
  const enviarLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

  try {
    const response = await fetch('http://localhost:3000/login', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email,password})
    });
    const responseData = await response.json();
    
    if (response.ok) {
      setAlertMessage('Usuario ingresó exitosamente');
      setAlertVariant('success');
      setUsuario({token: responseData.token,datos: responseData.datos});
      navigate(`/publicaciones`)
     
      //setTimeout(()=>{setAlertMessage(''); window.location.assign('/login')}, 3000);
    } else {
      setAlertMessage('ERROR revise sus credenciales');
      setAlertVariant('danger');
      setTimeout(()=>{setAlertMessage('')}, 3000);
    }
  } catch (error) {
    setAlertMessage('ERROR revise bien su conexion');
    setAlertVariant('danger');
    setTimeout(()=>{setAlertMessage('')}, 3000);
  }
};
  return (
    <div className="card pt-5 p-5 mw-25  h-50 position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly">
      
      <h2 className='text-center'><span className="bi bi-disc-fill"></span> Login</h2>
      {alertMessage && <Alert className="fade show" variant={alertVariant}>{alertMessage}</Alert>}
      <Form className="d-flex flex-column h-100 justify-content-evenly" onSubmit={enviarLogin}> 
      <Form.Control type="email" name="email" placeholder="Email" />
      
      <Form.Control type="password" name="password" placeholder="Contraseña" />
      
      <Button  type='submit' variant="success">Ingresar<span><i className="bi bi-arrow-right ms-3"></i></span></Button>{' '}
      </Form>
      
    </div>
  );
    }

export default LoginForm;