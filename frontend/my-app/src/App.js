import './Styles/App.css';
import Acceuil from './Component/Acceuil';
import Profil from './Component/Users/Profil';
import Login from './Component/Users/Login';
import Register from './Component/Users/Register.js'
import Gestion_A_User from './Component/Astuces/Gestion_A_User';
import Gestion_A_Admin from './Component/Astuces/Gestion_A_Admin';
import Consult_Astuces from './Component/Astuces/Consult_Astuces';
import ItemUsers from './Component/Users/ItemUsers';
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
            <Route exac  path='/Consulte/:id' element={<Consult_Astuces />}/>
            <Route exac  path='/UserAstuce' element={<Gestion_A_User />}/>
            <Route exac  path='/AdminAstuce' element={<Gestion_A_Admin />}/>
            <Route exac  path='/ItemUsers' element={<ItemUsers />}/>
       </Routes>
      </Router>
    </div>

  );
}

export default App;