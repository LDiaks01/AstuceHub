import { Button , Card,Avatar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../../model/data'
import '../../Styles/App.css'
import Header from '../Header';
import supprimer from '../../assets/Supprimer.png'
import axios from 'axios';

const Consult_Astuces = () => {
 const baseUrl = `http://192.168.137.1:7000/astuces/show?IdAstuce=${2}`;
  const [info,setInfo] = useState("");
  const [data,setData] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(()=>{
      axios.get(baseUrl).then((reponse)=>{
        setInfo(reponse.data.users.astuce);
        setData(reponse.data.users.astuce.Commentaires)

        console.log(reponse.data.users.astuce.Commentaires);
      })
  },[]);
 
  const handle =  async (e) => {
    e.preventDefault( );
    const formDatax = new FormData();
     formDatax.append("creator","CamKill");

formDatax.append( "IdAstuce", 2);
formDatax.append("commentaire", comment);

  
  const base  = `http://192.168.137.1:7000/commentaire/add/`; 
   await axios.post (base,
    formDatax,
     { 
     headers: {
       "Content-type": "multipart/form-data"
     }
   }
     ).then((reponse)=>{
       console.log(reponse);
     })
  }
  return (
    <div>
    <Header  />
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