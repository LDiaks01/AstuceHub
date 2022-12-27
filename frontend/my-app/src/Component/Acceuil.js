import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row } from 'react-bootstrap';
import Header from './Header';
import Acceuil_body from './Acceuil_body';
import ItemAstuce from './ItemAstuce';
import "../Styles/App.css" 
const Acceuil = () => {
    return(
        <div >
            <Header />
            <Acceuil_body/>
            <ItemAstuce  nombre={2} texte="Liste de quelques astuces"/>
        </div>
    
);
}

export default Acceuil;