import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Nav, Row } from 'react-bootstrap';
import Header from './Header';
import Acceuil_body from './Acceuil_body';
import ItemAstuce from './ItemAstuce';
import "../Styles/App.css" ;
import Accueil_Item from '../Item/Acceuil_Item';
const Acceuil = () => {
    return(
        <div >
            <Header />
            <Acceuil_body/>
            <Accueil_Item user={false} nombre={2} texte="Liste de quelques astuces"/>
        </div>
    
);
}

export default Acceuil;