import {Form,Button} from 'react-bootstrap/';
import TypeAhead from './TypeAhead';

function NuevoAlbum() {
  return (
    <div className="card pt-1 p-5 mw-50  h-75 position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly">
      <h2 className='text-center'>Agregar Album</h2>
      <TypeAhead/>
      
      
      
      <Button  variant="success">Ingresar <span><i className="bi bi-arrow-right ms-6"></i></span></Button>{' '}

      
    </div>
  );
}

export default NuevoAlbum;