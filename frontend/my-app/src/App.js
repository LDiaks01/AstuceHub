import './Styles/App.css';
import Acceuil from './Component/Acceuil';
import Rgister from './Component/Users/Register.js'
import Profil from './Component/Users/Profil';
import Login from './Component/Users/Login';
import Register from './Component/Users/Register.js'
import Gestion_A_User from './Component/Astuces/Gestion_A_User';
import Gestion_A_Admin from './Component/Astuces/Gestion_A_Admin';
import Consult_Astuces from './Component/Astuces/Consult_Astuces';
import EditUser from './Component/Users/EditUser';
import ListUsers from './Component/Users/ListUsers';
import PublierAstuce from "./Component/Astuces/PublierAstuce"
import {BrowserRouter as Router,Switch, Routes,Route} from "react-router-dom"

function  App(){
  return (
    <div className='app'>


      <Router>
       <Routes>
            <Route exac  path='/' element={<Acceuil/>}/>
            <Route exac  path='/Login' element={<Login />}/>
            <Route exac  path='/Register' element={<Register />}/>
            <Route exac  path='/Profil' element={<Profil />}/>
            <Route exac  path='/Publier' element={<PublierAstuce />}/>
       </Routes>
      </Router>
    </div>

  );
}

export default App;