import eye from '../assets/eye.png'
import '../Styles/App.css'
const Item = ({titre, desc}) => {
    let description = desc;
      
  return(
    <tr>
        <td>{titre}</td>
        <td>{description.substring(0, 50)}...</td>
        <td> <a  title="Voir plus" href="#" ><img src={eye} alt='Voir plus'  className='eyes'/></a></td>
    </tr>
  )
}

export default Item;