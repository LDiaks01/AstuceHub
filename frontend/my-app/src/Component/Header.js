import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row,NavDropdown,MenuItem,Dropdown} from 'react-bootstrap';
import logo from '../assets/logo.png';
import {json, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
const baseUrl = "http://localhost:7000/profil/show";

const Header =  () => {
    const [user,setUser] = useState([]);
    useEffect( ()=>{
       
       setUser(JSON.parse(localStorage.getItem('user')))
       
        axios.get(baseUrl+`?username=${user.email}`,
            {
              headers:{'Authorization': `Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbWFkb3VjaXJlY2FtYXJhQGdtYWlsLmNvbSIsImlhdCI6MTY3MjM1NzEzNywiZXhwIjoxNjcyNDQzNTM3fQ.oXMV1jbfjy0QqQaqxfemLxEao0-wBUdPl2uHUh2TiZY`,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }
            }
          ).then((response)=>{
              console.log(response);
          }).catch((error)=>{
              console.error(error) 

          })
        
       
    },[]);
    
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
            {
                !user.isConnected &&
            
                <Nav className='me-auto'>
                    <Nav.Link   className='d-inline-block align-top fw-bold text-primary' ><Link to="/Login">Connexion</Link> </Nav.Link>
                    <Nav.Link href="#"  className='d-inline-block align-top fw-bold text-primary' ><Link to="/Register">S'inscrire</Link> </Nav.Link>
                </Nav>
                }
            {
                user.isConnected &&
                <Nav pullRight>
                <NavDropdown eventKey={1} 
                    title={
                        <div className="avatar">
                            <img className="avatarImg" 
                                src="https://www.generation-game.com/wp-content/uploads/2020/03/CoD-Warzone-trucs-astuces-pour-gagner-950x509.jpg" 
                                alt="user pic"
                            />
    
                            {user.username}
                        </div>
                    } 
                    id="basic-nav-dropdown">
    
                    
                    <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Mes Astuces</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Se deconnecte</Dropdown.Item>
                  
                </NavDropdown>
            </Nav>
            }
            </Row>
        
          </Container>
        
        </Navbar>
       
    </header>
   
);}

export default Header;