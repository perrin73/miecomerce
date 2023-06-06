import {Form,Button} from 'react-bootstrap/';

function LoginForm() {
  return (
    <div className="card pt-5 p-5 mw-25  h-75 position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly">
      <h1 className="text-center"><i className="bi bi-disc-fill"></i></h1>
      <h2 className='text-center'>Login</h2>
      {/*<Form.Control size="lg" type="text" placeholder="Large text" />
      <br />*/}
      <Form.Control type="text" placeholder="Usuario" />
      
      <Form.Control type="password" placeholder="Contraseña" />
      
      <Button  variant="success">Ingresar<span><i className="bi bi-arrow-right ms-3"></i></span></Button>{' '}

      
    </div>
  );
}

export default LoginForm;