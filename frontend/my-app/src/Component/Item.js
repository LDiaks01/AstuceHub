import eye from '../assets/eye.png'
import '../Styles/App.css'
import supprimer from '../assets/Supprimer.png'
import valide from '../assets/valide.png'
const Item = ({titre, desc, user, etat}) => {
    let description = desc;
      
  return(
    <tr>
        <td>{titre}</td>
        <td>{description.substring(0, 50)}...</td>
        {user?<td>{etat? "valide ":"En attend ..."}</td> : <td>{etat? "valide ":"En attend ..."}</td>  }  {/* cette partie ne s'affiche que s'il c'est l'utilisateur qui veux voir la liste de ses Asctuce */}
        <td> <a  title="supprimer" href="#" ><img src={eye} alt='Voir plus'  className='eyes'/></a>
        {user? <a  title="supprimer" href="#" ><img src={supprimer} alt='delete'  className='eyes'/></a> : <a  title="Voir plus" href="#" ><img src={supprimer} alt='delete'  className='eyes'/></a> 
      
      } {/* cette partie ne s'affiche que s'il c'est l'utilisateur qui veux voir la liste de ses Asctuce */}
        {!user && !etat && <a  title="supprimer" href="#" ><img src={valide} alt='Voir plus'  className='eyes'/></a> }
        </td>
    </tr>
  )
}

export default Item;