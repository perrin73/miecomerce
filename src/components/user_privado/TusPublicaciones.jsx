import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import contextVinil from "../../contexto/ContextVinil";

function TusPublicaciones() {
  const { usuario, setUsuario } = useContext(contextVinil);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario.token || !usuario.datos || !usuario.datos.nombre) {
      navigate('/login'); // Redirigir a la página de inicio de sesión si los datos no están disponibles
    }
  }, []);

  return (
    <>
        {usuario.datos && (
        <>
        <h5 className="card-title text-capitalize text-light">Nombre: {usuario.datos.nombre}</h5>
        <h5>ciudad:{usuario.datos.ciudad}</h5> 
        </>
      )}  
    </>
  );
}

export default TusPublicaciones;
