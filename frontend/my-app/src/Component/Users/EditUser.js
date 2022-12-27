import React, { useState, useEffect } from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';

//Schéma de validation avec Yup
const validationSchema = Yup.object().shape({
  nom: Yup.string()
      .min(5, "Trop petit")
      .max(20, "Trop long!")
      .required("Ce champ est obligatoire"),
  prenom: Yup.string()
      .min(2, "trop petit")
      .max(20, "trop long!")
      .required("Ce champ est obligatoire"),
  Pseudo: Yup.string()
      .min(2, "trop petit")
      .max(10, "trop long!")
      .required("Ce champ est obligatoire"),
  email: Yup.string()
      .email("email invalide")
      .required("L'email est obligatoire"),
  password: Yup.string()
      .required("Le mot de passe est obligatoire")
      .min(8, "Le mot de passe doit être plus grand que 8 caractères")
      .max(20, "Le mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
      .required("La Confirmation de mot de passe est obligatoire")
      .oneOf(
          [Yup.ref("password"), null],
          "Le mot de passe de confirmation ne correspond pas"
      ),
  photo: Yup.string()
      .email("Fichier invalide")
      .required("La photo est obligatoire"),
});

//Création de la variable initialValues
const initialValues = {
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
  };

//Traitement de la soumission du formulaire
const handleSubmit = (values) => {
  console.log(values)
};



const EditUser = (props) => {
    const [user, setUser] = useState(props.currentUser)
    
    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
    }
      
  return (
    <div>
        <Header />
        <div className="container">
        <div className="row  bg-white shadow mb-5">
            <div className="col-md-6 offset-md-3 pt-2 mb-5">
            <h1 className="text-center">Modification du profil</h1>
            <Formik
                 initialValues={initialValues}
                 validationSchema={validationSchema}
                 onSubmit={(values) =>handleSubmit(values)}
            >
                {({ resetForm }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor="nom">Nom</label>
                            <Field
                                type="text"
                                name="nom"
                                //   value={user.nom}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="nom"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="prenoom">Prénom</label>
                            <Field
                                type="text"
                                name="prenom"
                                //   value={user.prenom}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="prenom"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="pseudo">Pseudo</label>
                            <Field
                                type="text"
                                name="pseudo"
                                //   value={user.pseudo}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="pseudo"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                //   value={user.email}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="email"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Mot de passe</label>
                            <Field
                                type="password"
                                name="password"
                                //   value={user.password}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="password"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                //   value={user.confirmPassword}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Photo de profil</label>
                            <Field
                                type="file"
                                name="photo"
                                //   value={user.photo}
                                className="form-control"t
                                onChange={handleInputChange}
                            />
                            <ErrorMessage
                                name="photo"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group d-flex justify-content-end gap-3">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="btn btn-secondary"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Enregistré
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
        </div>
    </div>
  )
}
export default EditUser;