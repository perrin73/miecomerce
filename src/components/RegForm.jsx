import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function RegForm() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form.elements.nombre.value;
    const email = form.elements.email.value;
    const ciudad = form.elements.ciudad.value;
    const password = form.elements.password.value;

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          email,
          ciudad,
          password
        })
      });

      if (response.ok) {
        setAlertMessage('Usuario se agregó exitosamente ahora le enviaremos a login');
        setAlertVariant('success');
        form.reset();
        setTimeout(()=>{setAlertMessage(''); window.location.assign('/login')}, 3000);
      } else {
        setAlertMessage('Usuario no se agregó hubo un error ¿llenó todos los campos?');
        setAlertVariant('danger');
        setTimeout(()=>{setAlertMessage('')}, 3000);
      }
    } catch (error) {
      setAlertMessage('Usuario no se agregó hubo un error ¿llenó todos los campos?');
      setAlertVariant('danger');
      setTimeout(()=>{setAlertMessage('')}, 3000);
    }
  };

  return (
    <div className="card pt-5 p-5 mw-25 h-75 position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
      <h2 className="text-center">
        <span className="bi bi-disc-fill"></span> Registrarse
      </h2>
      {alertMessage && <Alert className="fade show" variant={alertVariant}>{alertMessage}</Alert>}
      <Form className="d-flex flex-column h-100 justify-content-evenly" onSubmit={handleSubmit}>
        <Form.Control className="fs-6" type="text" name="nombre" placeholder="Ingrese nombre o nick" />
        <Form.Control className="fs-6" type="email" name="email" placeholder="Ingrese email" />
        <Form.Control className="fs-6" type="text" name="ciudad" placeholder="Ingrese ciudad" />
        <Form.Control className="fs-6" type="password" name="password" placeholder="Contraseña" />
        <Form.Control className="fs-6" type="password" placeholder="Repita contraseña" />
        <Button type="submit" variant="success">
          Ingresar <span><i className="bi bi-arrow-right ms-6"></i></span>
        </Button>
      </Form>
    </div>
  );
}

export default RegForm;
