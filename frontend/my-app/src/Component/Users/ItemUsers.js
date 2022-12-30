import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

//endpoint de l'api pour voir l'ensemble des utilisateur
const baseUrl = "http://localhost:3000/users/all"

// Déclaration du composant ItemUsers qui affiche la liste des utilisateurs

function ItemUsers() {
     // Définition de l'état qui stockera les informations des utilisateurs une fois récupérée
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Utilisez Axios pour envoyer une requête GET à l'API pour récupérer les utilisateurs
        axios.get(baseUrl)
          .then(response => {
            // Mettre à jour l'état de l'application avec les utilisateurs récupérés
            setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      return(
        <div>
            <Header />
            <div className="container">
            <div className="row  bg-white shadow mb-5">
                <div className="col-md-6 offset-md-3 pt-2 mb-5"></div>
                <h2 className='d-inline-block align-top text-center' >Liste des utilisateurs</h2>
                <table className="table table-striped table-bordered w-100">
                    <thead>
                        <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Pseudo</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.pseudo}</td>
                            <td>{user.email}</td>
                            <td>{!user.isAdmin  &&(
                                <p>Normal</p>
                            )}
                            {user.isAdmin  &&(
                                <p>Admin</p>
                            )}
                            </td>
                            <td>{!user.isAdmin  &&(
                                <div className=' d-inline'>
                                    <button className="btn btn-danger btn-xs d-inline float-start w-10"><FontAwesomeIcon className='w-10' icon={faCheck}/></button>
                                    <button className="btn btn-danger btn-xs d-inline float-start w-10"><FontAwesomeIcon className='w-10' icon={faTrash}/></button>
                                </div>
                            )}
                            {user.isAdmin  &&(
                                <p>Admin</p>
                            )}
                            </td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
      )
    
}

export default ItemUsers;