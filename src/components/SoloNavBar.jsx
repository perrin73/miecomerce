import { Router, useNavigate,useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function SoloNavBar() {
  const location = useLocation();
  const conBuscador = location.pathname === '/search';
  const navigate = useNavigate();

  return (
    <Navbar className='p-3' style={{backgroundColor: 'rgba(0,0,0,0.5)'}} collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand  onClick={()=> navigate(`/`)} className='text-light' style={{cursor: 'pointer'}}><span><i className="bi bi-disc-fill"></i></span> Vinyl Store</Navbar.Brand>
        {conBuscador && (
          <div className="input-group w-50 ms-3">
           <input type="text" className="form-control" placeholder="Busca aquí..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text bi bi-search" id="basic-addon2"></span>
          </div>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav >
            <Nav.Link  className='text-light'  onClick={()=> navigate(`/register`)}>Regisrarse</Nav.Link>
            <Nav.Link  className='text-light'  onClick={()=> navigate(`/login`)}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SoloNavBar;