import { Button , Card,Avatar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/App.css'
import Header from '../Header';
import supprimer from '../../assets/Supprimer.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

/*Déclaration du Composant affiche la vue consulter une astuce et ajouter un commentaire */


const Consult_Astuces = () => {
 // Définition des états qui stockeront les informations de l'astuce une fois récupérées et qui permettront d'ajouter un commentaire
  const [info,setInfo] = useState("");
  const [data,setData] = useState([]);
  const [comment, setComment] = useState("");
  const [idPost,setidPost] = useState("");
  const [userInfo,setUserInfo] = useState([]);
   const {id} = useParams();
   //route de l'api pour voir une astuce (endpoint)
   const baseUrl = `http://localhost:3000/astuces/show?IdAstuce=${id}`;
   
  useEffect(()=>{
    //Appel de la méthode axios.get pour récupérer les informations de l'astuce à partir de l'API
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
    console.log(userInfo)
      axios.get(baseUrl).then((reponse)=>{
        setInfo(reponse.data.users.astuce);
        setData(reponse.data.users.astuce.Commentaires)
      })

  },[]);
 
  const handle =  async (e) => {
    e.preventDefault( );
   
const data = {
  creator :userInfo.pseudo,
   IdAstuce: id,
   commentaire:comment
}
  //route de l'api pour ajouter un commentaire (endpoint)
  const base  = `http://localhost:3000/commentaires/add/`; 
   await axios.post (base,
    data,
     { 
     headers: {
      "Content-type": "application/x-www-form-urlencoded",
     }
   }
     ).then((reponse)=>{
       console.log(reponse);
     })
  }
  return (
    <div>
      <Header  />
       {/* Affichage des informations de l'astuce une fois qu'elles ont été récupérées */}
    <div className='Consulte'>
    <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={info.imageUrl} />
        <Card.Body>
          <Card.Title className='fw-bold'>{info.titre}</Card.Title>
          <Card.Text>
            {info.contenu}
          </Card.Text>
          
        </Card.Body> 
      </Card>
          {/* Champs pour ajouter un commentaire */}
          <h4 className='fw-bold' style={{marginLeft:12}}>Comment  :</h4>
          <div className="form-group">
          <form encType='multipart/form-data'  onSubmit={handle}>
          <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          onChange={e=> setComment(e.target.value)}
          value = {comment}
        />
          <input type="submit"  text ="Envoyer" className="btn btn-primary"   />
        
          </form>

      </div>
            {data.map((game)=>(
            <div className='comment' >
            <div>
                <img src = {game.User.imageUrl} className='avatar' />
                <p className='author'>{game.User.pseudo}</p>
                <img src={supprimer}  className="supprimer" />
            </div>
            <p className='message'>
                {game.commentaire}
            </p>
        </div>
            ))}
      </div>
    
    </div>
 
  );
}


export default Consult_Astuces;