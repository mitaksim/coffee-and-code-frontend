import React, { useState } from 'react';
import api from './services/api';
import './App.css';

// Imports
import logo from './Assets/coffee-logo2.png';

function App() {
  // Stocker une information dans le state
  // email = valeur de l'input
  // setEmail = actualise la valeur de l'email
  const [email, setEmail] = useState('');

  // Création de la méthode qui va nous permettre d'écouter l'événement sur le bouton
  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);

    }

    // evénement qui change la valeur de l'email
    function handleEmailChange(event) {
      setEmail(event.target.value);
    
  }
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Coffee&Code"/>

      <div className="content">
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          value={email}
          // A chaque fois que l'user change la valeur de l'email (onChange) on reçoit un event
          //onChange={event => setEmail(event.target.value)}
          onChange={handleEmailChange}
          />

          <button className="btn" type="submit">Validez</button>
        </form>
      </div>
    </div>
  );
}

export default App;
