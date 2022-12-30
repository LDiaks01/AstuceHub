import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row,NavDropdown,MenuItem,Dropdown} from 'react-bootstrap';
import logo from '../assets/logo.png';
import {json, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
const baseUrl = "http://localhost:3000/profil/show";

const Header =  () => {
    const [user,setUser] = useState([]);
    const [userInfo,setUserInfo] = useState([]);
    
    useEffect( ()=>{
       setUser(JSON.parse(localStorage.getItem('user')))
         
        axios.get(baseUrl+`?username=${user.email}`,
         
                  { headers: {"Authorization" : `Bearer ${user.token}`} }
           ).then((response)=>{    
            localStorage.setItem('userInfo', JSON.stringify(response.data));
          }).catch((error)=>{
              console.error(error) 

          }) 
          setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
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
                                src={userInfo.imageUrl} 
                                alt="user pic"
                            />
    
                            {user.username}
                        </div>
                    } 
                    id="basic-nav-dropdown">
    
                    
                    <Dropdown.Item ><Link to="/Profil"> Profil </Link></Dropdown.Item>
                  {userInfo.isAdmin?<Dropdown.Item ><Link to="/AdminAstuce"> Tous les  Astuces </Link></Dropdown.Item>:
                   <Dropdown.Item ><Link to="/UserAstuce">Mes Astuces</Link></Dropdown.Item>  }  
                    <Dropdown.Item ><Link to="/Publier"> Publier une Astuce</Link></Dropdown.Item>
                    <Dropdown.Item >Se deconnecte</Dropdown.Item>
                  
                </NavDropdown>
            </Nav>
            }
            </Row>
        
          </Container>
        
        </Navbar>
       





 




    </header>
   
);}

export default Header;