import { Button , Card,Avatar } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../../model/data'
import '../../Styles/App.css'
import Header from '../Header';
import supprimer from '../../assets/Supprimer.png'

const Consult_Astuces = () => {
    const [comment ,setComment] = useState("");
  return (
    <div>
    <Header  />
 <div className='Consulte'>
 <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.generation-game.com/wp-content/uploads/2020/03/CoD-Warzone-trucs-astuces-pour-gagner-950x509.jpg" />
      <Card.Body>
        <Card.Title className='fw-bold'>DMZ:Atterir rapidement sur la carte ou traverser une longue distance en parachute</Card.Title>
        <Card.Text>
       champions qui se distinguent par leur mobilité et leurs dégâts. Il existe deux types de combattants. Ce sont des Assassins, leur grande mobilité leur permet d'entrer et de sortir des combats, ayant des capacités qui amplifient radicalement les dégâts pour faire disparaître les champions cibles ennemis ; et les tirailleurs, qui leur permettent de prendre le contrôle de cibles spécifiques et sont capables de subir une quantité importante de dégâts,
        
        </Card.Text>
       
      </Card.Body> 
    </Card>
       <h4 className='fw-bold' style={{marginLeft:12}}>Comment  :</h4>
       <div className="form-group">
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        onChange={e=> setComment(e.target.value)}
        value = {comment}
      />
       <Button style={{margin:12}} >Envoyer</Button>

    </div>
        <div className='comment' >
            <div>
                <img src = "https://www.generation-game.com/wp-content/uploads/2020/03/CoD-Warzone-trucs-astuces-pour-gagner-950x509.jpg" className='avatar' />
                <p className='author'>Camara</p>
                <img src={supprimer}  className="supprimer" />
            </div>
            <p className='message'>
                Je trouve cela top mais nous devons deployer plus d'energie pour utiliser les plaques je trouve ça null
            </p>
        </div>
    </div>
    
    </div>
 
  );
}


export default Consult_Astuces;