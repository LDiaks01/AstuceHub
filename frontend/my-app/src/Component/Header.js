import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";


const Header = () => {
    return(
    <header>
        <Navbar bg='blue' expand="lg" className='shadow mb-5 bg-white '>
          <Container>
            <Row>
                <Navbar.Brand href="#">
                <Link to="/"><img src={logo} alt="logo" width="60" height="60" className='d-inline-block align-top' /> </Link> 
                </Navbar.Brand>
            </Row>
            <Row>
                <h1 className='d-inline-block align-top' >Game Asctuce</h1>
            </Row>
            <Row>
                <Nav className='me-auto'>
                    <Nav.Link   className='d-inline-block align-top fw-bold text-primary' ><Link to="/Login">Connexion</Link> </Nav.Link>
                    <Nav.Link href="#"  className='d-inline-block align-top fw-bold text-primary' ><Link to="/Register">S'inscrire</Link> </Nav.Link>
                </Nav>
            </Row>
            
          </Container>
        
        </Navbar>
       
    </header>
   
);}

export default Header;