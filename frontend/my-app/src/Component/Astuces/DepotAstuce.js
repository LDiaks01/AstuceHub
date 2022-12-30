import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';

const DepotAstuce = () => {
    const [titre, SetTitre] = useState("");
    const [infosAstuce, setInfosAstuce] = useState("");
    const [contenu, setContenu] = useState("");
    const [file, setFiles] = React.useState([]);


    const handler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row  bg-white shadow mb-5">
                    <div className="col-md-6 offset-md-3 pt-2 mb-5">
                        <h1 className="text-center">Depôt d'astuce</h1>
                        <form encType='multipart/form-data'  onSubmit={handler}>
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
export default DepotAstuce;
