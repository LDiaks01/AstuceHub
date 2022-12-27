import { Button } from 'react-bootstrap';
import data from '../../model/data'
import '../../Styles/App.css'
import Header from '../Header';
import Item from '../Item'
import ItemAstuce from '../ItemAstuce';
const Gestion_A_User = () => {
  return (
    <div>
     <Header />
<div className='Gestion shadow   bg-white '>
      
      <ItemAstuce  user={false} texte={"L'ensemble de toutes les astuces "} />

</div>
    </div>
    
  );

}

export default Gestion_A_User;