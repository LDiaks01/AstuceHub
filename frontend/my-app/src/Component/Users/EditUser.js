import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import axios from 'axios';
const baseUrl = "http://127.0.0.1:7000/profil/modify";

const EditUser = () => {
    const [user, setUser] = useState({});
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFiles] = React.useState('');

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
                                <label htmlFor="lastName">Nom</label>
                                <input
                                    type="name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
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
                                    value={firstName}
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
                                    value={pseudo}
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
                                    value={email}
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
                                    value={pseudo}
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