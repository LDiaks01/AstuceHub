import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import axios from 'axios';
import {Link} from "react-router-dom";
const baseUrl = "http://127.0.0.1:7000/register/";

const Register = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [file, setFiles] = React.useState([]);
    const [error, setError] = useState(null);


    const handler = (e) => {
        e.preventDefault();
       
    const formData  = new FormData();
    formData.append("file",file);
    formData.append( "firstName",firstName);
    formData.append( "lastName",lastName);
    formData.append( "pseudo",pseudo);
    formData.append("email",email);
    formData.append("password",password);
    
    const passwordSize = () => {
        if (password.length < 8) {
          setError('Le mot de passe doit comporté au moins 8 caractères');
          return false;
        }
        return true;
      }

    const validateForm = () => {
        if (password !== confirmPassword) {
          setError('Les mots de passe ne correspondent pas');
          return false;
        }
        return true;
      }
    
    if(validateForm() && passwordSize()){
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
                                <label >Nom</label>
                                <input
                                    type="name"
                                    name="lastName"
                                    className="form-control"
                                    required="required"
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
                                    required="required"
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
                                    required="required"
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
                                    required="required"
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
                                    required="required"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="error text-danger">{error}</p>}
                            <div className="form-group mb-3">
                                <label >
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                    required="required"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="error text-danger">{error}</p>}
                            <div className="form-group mb-3">
                                <label >Photo de profil</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="file"
                                    className="form-control"
                                    required="required"
                                    onChange={(e) => setFiles(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group d-grid mb-3">
                             <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                <Link Link to="/" className='text-white'>S'inscrire</Link>
                            </button>
                            </div>
                            <div>
                                <p className="text-right">
                                    Déjà inscrit ? <Link to="/Login"><a href="#">Connexion</a></Link>
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
