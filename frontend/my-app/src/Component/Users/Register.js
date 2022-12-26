import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";

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

function Register() {
  return (
    <div className="container">
      <div className="row  bg-white shadow mb-5">
          <div className="col-md-6 offset-md-3 pt-2 mb-5">
          <h1 className="text-center">Inscription</h1>
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
                              className="form-control"
                              placeholder="Nom"
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
                              className="form-control"
                              placeholder="Prénom"
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
                              className="form-control"
                              placeholder="Pseudo"
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
                              className="form-control"
                              placeholder="Email"
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
                              className="form-control"
                              placeholder="Mot de passe"
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
                              className="form-control"
                              placeholder="Mot de passe"
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
                              className="form-control"t
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
                              S'inscrire
                          </button>
                      </div>
                      <div>
                        <p className="text-right">
                          Déjà enregistré <a href="#">Connexion ?</a>
                        </p>
                      </div>
                  </Form>
              )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
export default Register;