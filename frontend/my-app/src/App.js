import './Styles/App.css';
import Acceuil from './Component/Acceuil';
import Rgister from './Component/Users/Register.js'
import Profil from './Component/Users/Profil';
import Register from './Component/Users/Register.js'
import Gestion_A_User from './Component/Astuces/Gestion_A_User';
import Gestion_A_Admin from './Component/Astuces/Gestion_A_Admin';
import Consult_Astuces from './Component/Astuces/Consult_Astuces';

function  App(){
  return (
    <div className='app'>
       <Profil />
    </div>
     
  );
}

export default App;
 