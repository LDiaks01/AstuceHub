import React, { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import axios from 'axios';

//endpoint de l'api pour l'ajout d'une astuce
const baseUrl = "http://localhost:7000/astuces/add";

/*Déclaration du composant qui permet de publier une astuce*/

const PublierAstuce = () => {

    // Définition des états qui permettront d'ajouter une astuce et qui stockeront les données saisies dans le formulaire

    const [titre, SetTitre] = useState("");
    const [infosAstuce, setInfosAstuce] = useState("");
    const [contenu, setContenu] = useState("");
    const [file, setFiles] = React.useState([]);
    const [user,setUser] = useState([]); 

    useEffect(()=>{
       setUser(JSON.parse(localStorage.getItem('user')))
    },[])

    // Fonction qui sera appelée lors de la soumission du formulaire
    const handler = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Création d'une instance de FormData
    
       const formData = new FormData();

       // Ajout des valeurs saisies dans le formulaire à l'instance de FormData

       formData.append("titre",titre);
       formData.append("infosAstuce",infosAstuce);
       formData.append("contenu",contenu);
       formData.append('imageUrl',file)
        const data = {
            titre: titre,
            infosAstuce:infosAstuce,
            contenu:contenu,
            imageUrl: file
        }

        // Envoi des données de l'astuce à l'API
       axios.put(baseUrl+`?username=${user.email}`,
       data,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${user.token}`
          }
        }
       ).then((reponse)=>{
         console.log(reponse);
       }).catch((e)=> console.log(e))
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row  bg-white shadow mb-5">
                    <div className="col-md-6 offset-md-3 pt-2 mb-5">
                        <h1 className="text-center">Depôt d'astuce</h1>
                        <form   onSubmit={handler}>
                            <div className="form-group mb-3">
                                <label >Titre</label>
                                <input
                                    type="text"
                                    name="titre"
                                    className="form-control"
                                    onChange={(e) => SetTitre(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label >Information de l'astuce</label>
                                <textarea
                                    id="infosAstuce"
                                    name="infosAstuce"
                                    className="form-control"
                                    onChange={(e) => setInfosAstuce(e.target.value)}
                                > </textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label >Contenu de l'astuce</label>
                                <textarea
                                    id="contenu"
                                    name="contenu"
                                    className="form-control"
                                    onChange={(e) => setContenu(e.target.value)}
                                > </textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label >Photo de l'astuce</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="file"
                                    className="form-control"
                                    required="required"
                                    onChange={(e) => setFiles(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <input type="submit" value={"Publier"} className="btn btn-primary" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublierAstuce;
