import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import axios from 'axios';

//endpoint de l'api pour modifier un utilisateur
const baseUrl = "http://127.0.0.1:3000/profil/modify";

// Déclaration du composant EditUser qui affiche un formulaire permettant de modifier un utilisateur

const EditUser = () => {

    // Définition des états qui stockeront les valeurs saisies dans le formulaire

    const [user, setUser] = useState({});
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [file, setFiles] = React.useState('');
    const [error, setError] = useState(null);

    //Récupération des données de l'utisateur à partir de l'api
    const fetchUserData = async () =>{
        const reponse = await axios.get(baseUrl)
        try {
            setUser(reponse.data);
            setFirstName(reponse.data.firstName);
            setLastName(reponse.data.lastName);
            setPseudo(reponse.data.pseudo);
            setEmail(reponse.data.email);
            setPassword(reponse.data.password);
            setFiles(reponse.data.file);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        fetchUserData();
    }, []);

     // Fonction qui sera appelée lors de la soumission du formulaire
    const handler = (e) => {
        e.preventDefault();
       
    }
      
  return (
    <div>
        <Header />
        <div className="container">
                <div className="row  bg-white shadow mb-5">
                    <div className="col-md-6 offset-md-3 pt-2 mb-5">
                        <h1 className="text-center">Modification du profil</h1>
                        <form encType='multipart/form-data'  onSubmit={handler}>
                            <div className="form-group mb-3">
                                <label >Nom</label>
                                <input
                                    type="name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Prénom</label>
                                <input
                                    type="name"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Pseudo</label>
                                <input
                                    type="text"
                                    id="pseudo"
                                    name="pseudo"
                                    className="form-control"
                                    value={pseudo}
                                    onChange={(e) => setPseudo(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Mot de passe</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    value={pseudo}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Photo de profil</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="file"
                                    className="form-control"
                                    value={file}
                                    onChange={(e) => setFiles(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <input type="submit" value={"Enregistré"} className="btn btn-primary" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}
export default EditUser;