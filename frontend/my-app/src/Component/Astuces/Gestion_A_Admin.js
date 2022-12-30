import { Button } from 'react-bootstrap';
import '../../Styles/App.css'
import Header from '../Header';
import Item from '../Item'
import ItemAstuce from '../ItemAstuce';

/*Déclaration du composant qui affiche toutes les astuces */

const Gestion_A_User = () => {
  return (
    <div>
     <Header />
      <div className='Gestion shadow bg-white '>
            
            <ItemAstuce  user={false} texte={"L'ensemble de toutes les astuces "} />

      </div>
    </div>
    
  );

}

export default Gestion_A_User;