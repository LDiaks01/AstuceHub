import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form className='form_register p-5'>
        <h3>Inscription</h3>
        <div className="mb-3">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            placeholder="nom"
          />
        </div>
        <div className="mb-3">
          <label>Prénom</label>
          <input type="text" className="form-control" placeholder="prenom" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Saisissez un mot de passe"
          />
          <div className="mb-3">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirmer le mot de passe"
          />
        </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            S'inscrire 
          </button>
        </div>
        <p className="forgot-password text-right">
          Déjà enregistré <a href="#">Connexion?</a>
        </p>
      </form>
    )
  }
}