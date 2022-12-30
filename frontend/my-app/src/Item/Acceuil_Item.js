import { Button } from 'react-bootstrap';
import datas from '../model/data'
import '../Styles/App.css'
import Item from '../Component/Item';
import axios  from 'axios';
import { useEffect, useState } from 'react';
import eye from '../assets/eye.png'
import supprimer from '../assets/Supprimer.png'
import { Link} from "react-router-dom";
import valide from '../assets/valide.png'


function ItemAstuce({nombre, user, texte}){
    const baseUrl = "http://localhost:3000/astuces/all/";
      const[data,setData]= useState([]);
     useEffect(()=>{
        axios.get(baseUrl).then((reponse)=>{
            setData(reponse.data.users.astuces)
             console.log(reponse)
        }) 
     },[])
   

    return(
        <div>
            <h3 className='titleList fw-bold fs-2 text-center mt-1'  >{texte}</h3>
            
            <div className='small_liste shadow  mb-5 bg-white '>
                
                <div className="container-fluid">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead> 
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                          
                                {user?<th>Etat</th>:<th>Etat</th> }   {/* cette partie ne s'affiche que s'il c'est l'utilisateur ou l'admin qui veux voir la liste de ses Asctuce */}
                                <th>Actions</th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            
                        {  data.map((game,index)=>(
                                          <tr>
                                          <td>{game.titre}</td>
                                          <td>{game.infosAstuce.substring(0, 50)}...</td>
                                          {user?<td>{game.isApproved? "valide ":"En attend ..."}</td> : <td>{game.isApproved? "valide ":"En attend ..."}</td>  }  {/* cette partie ne s'affiche que s'il c'est l'utilisateur qui veux voir la liste de ses Asctuce */}
                                          <td> <a  title="supprimer"><Link to={`/Consulte/${game.IdAstuce}`}><img src={eye} alt='Voir plus'  className='eyes'/></Link> </a>
                                           {/* cette partie ne s'affiche que s'il c'est l'utilisateur qui veux voir la liste de ses Asctuce */}
                                       
                                          </td>
                                      </tr>
                                        ))
                                    }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
                
              {user ? <Button className='btn btn-primary shadow  mb-5 button d-none '>Toutes les actuces</Button> :
              <Button className='btn btn-primary shadow   mb-5 button  d-none'>Toutes les actuces</Button>
              }   
              


        </div>
    )
}

export default ItemAstuce;