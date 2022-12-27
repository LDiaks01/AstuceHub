import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


//Schéma de validation avec Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
      .email("email invalide")
      .required("L'email est obligatoire"),
  password: Yup.string()
      .required("Le mot de passe est obligatoire")
      .min(8, "Le mot de passe doit être plus grand que 8 caractères")
      .max(20, "Le mot de passe doit être plus petit que 50 caractères"),
});

//Création de la variable initialValues
const initialValues = {
  email: "",
  password: "",
};

//Traitement de la soumission du formulaire
const handleSubmit = (values) => {
  console.log(values)
};

function Register() {
  return (
    <div>
        <Header />
        <div className="container">
        <div className="row  bg-white shadow mb-5">
            <div className="col-md-6 offset-md-3 pt-2 mb-5">
            <h1 className="text-center">Connexion</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) =>handleSubmit(values)}
            >
                {({ resetForm }) => (
                    <Form>
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
                        <div className='d-grid'>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                S'inscrire
                            </button>
                            </div>
                        <div>
                            <p className="text-right">
                            Vous n'avez de compte ?<a href="#">Inscrivez-vous</a>
                            </p>
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
export default Register;