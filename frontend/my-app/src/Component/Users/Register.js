import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import axios from 'axios'
const baseUrl = "http://localhost:3000/register/";



const Register = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [file, setFiles] = React.useState([]);


    const handler = (e) => {
        e.preventDefault();
       
    const formData  = new FormData();
    formData.append("file",file);
    formData.append( "firstName",firstName);
    formData.append( "lastName",lastName);
    formData.append( "pseudo",pseudo);
    formData.append("email",email);
    formData.append("password",password);

    
    
    axios.post(baseUrl,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data"
          }
        }
       ).then((reponse)=>{
          console.log(reponse)
       }).catch((e)=> console.log(e))
       
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row  bg-white shadow mb-5">
                    <div className="col-md-6 offset-md-3 pt-2 mb-5">
                        <h1 className="text-center">Inscription</h1>
                        <form encType='multipart/form-data'  onSubmit={handler}>
                            <div className="form-group mb-3">
                                <label htmlFor="lastName">Nom</label>
                                <input
                                    type="name"
                                    name="lastName"
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="firstName">Prénom</label>
                                <input
                                    type="name"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="firstName">Pseudo</label>
                                <input
                                    type="text"
                                    id="pseudo"
                                    name="pseudo"
                                    className="form-control"
                                    onChange={(e) => setPseudo(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmPassword">
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="file">Photo de profil</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="file"
                                    className="form-control"
                                    onChange={(e) => setFiles(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group d-flex justify-content-end gap-3">
                                <button
                                    type="button"

                                    className="btn btn-secondary"
                                >
                                    Annuler
                                </button>
                                <input type="submit" className="btn btn-primary" />
                             
                            </div>
                            <div>
                                <p className="text-right">
                                    Déjà inscrit ? <a href="#">Connexion</a>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
