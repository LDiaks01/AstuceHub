import './Styles/App.css';
import Acceuil from './Component/Acceuil';
import Register from './Component/Users/Register.js'
import Gestion_A_User from './Component/Astuces/Gestion_A_User';
import Gestion_A_Admin from './Component/Astuces/Gestion_A_Admin';
import Consult_Astuces from './Component/Astuces/Consult_Astuces';

function  App(){
  return (
    <div className='app'>
       <Consult_Astuces />
    </div>
     
  );
}

export default App;
 