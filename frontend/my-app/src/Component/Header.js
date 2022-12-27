import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'


const Header = () => {
    return(
    <header>
        <Navbar bg='blue' expand="lg" className='shadow mb-5 bg-white '>
          <Container>
            <Row>
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo" width="60" height="60" className='d-inline-block align-top' /> 
                </Navbar.Brand>
            </Row>
            <Row>
                <h1 className='d-inline-block align-top' >Game Asctuce</h1>
            </Row>
            <Row>
                <Nav className='me-auto'>
                    <Nav.Link href="#"  className='d-inline-block align-top fw-bold text-primary' >Connexion</Nav.Link>
                    <Nav.Link href="#"  className='d-inline-block align-top fw-bold text-primary' >S'inscrire</Nav.Link>
                </Nav>
            </Row>

          </Container>
        </Navbar>
    </header>
   
);}

export default Header;