import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Header from "../Header";
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import axios from 'axios';

function Profil(){

    const [user, setUser] = useState({});

   useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('userInfo')));
   },[])

      const {nom, prenom, pseudo, email, imageUrl} = user;

    return(
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card p-2 shadow mb-5 bg-white">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={imageUrl} alt="" className="rounded-circle p-1 bg-primary w-50"  />
                                    <div className="mt-3">
                                        <h4>{nom} {prenom}</h4>
                                        <p className="text-secondary mb-1">{pseudo}</p>
                                        <p className="text-muted font-size-sm">{email}</p>
                                    </div>
                                    <h6>
                                        Modifier le profil
                                    </h6>
                                    <Link to="/EditUser"><button className="btn btn-outline-primary btn-xs d-inline float-start w-10 mb-3"><FontAwesomeIcon className='w-10' icon={faPen}/></button></Link>
                                    <Link to="/DepotAstuce"><button className="btn btn-primary btn-xs d-inline float-start ">Publier une astuce</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;