import {Form,Button} from 'react-bootstrap/';

function RegForm() {
  return (
    <div className="card pt-5 p-5 mw-25  h-75 position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly">
      <h1 className="text-center"><i className="bi bi-disc-fill"></i></h1>
      <h2 className='text-center'>Registrarse</h2>
      {/*<Form.Control size="lg" type="text" placeholder="Large text" />
      <br />*/}
      <Form.Control className='fs-6' type="text" placeholder="Ingrese nombre o nick" />
      <Form.Control className='fs-6' type="email" placeholder="Ingrese email" />
      <Form.Control className='fs-6' type="text" placeholder="Ingrese ciudad" />
      <Form.Control className='fs-6' type="password" placeholder="Contraseña" />
      <Form.Control className='fs-6' type="password" placeholder="Repita contraseña" />
      
      <Button  variant="success">Ingresar <span><i className="bi bi-arrow-right ms-6"></i></span></Button>{' '}

      
    </div>
  );
}

export default RegForm;