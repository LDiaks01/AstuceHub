import { Button } from 'react-bootstrap';
import '../../Styles/App.css'
import Header from '../Header';
import Item from '../Item'
import ItemAstuce from '../ItemAstuce';

/*Déclaration du composant qui affiche toutes les astuces d'un utilisateur */

const Gestion_A_User = () => {
  return (
    <div>
     <Header />
<div className='Gestion shadow bg-white '>
      
      <ItemAstuce  user={true} texte={"L'ensemble de vos astuces"} />

</div>
    </div>
    
  );

}

export default Gestion_A_User;