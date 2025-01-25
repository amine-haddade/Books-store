import React from 'react';
import { GetUsersData } from './Provider/Context/AppContext'; // Assurez-vous d'importer correctement votre contexte

function Test() {
  const { valideReservation } = GetUsersData();

  const testValidation = () => {
    const data = {
      id: 1, // ID de la réservation que vous souhaitez valider
      status: "approved", // Nouveau statut de la réservation
    };

    valideReservation(data);
  };

  return (
    <div>
      <h1>Test de Validation de Réservation</h1>
      <button onClick={testValidation}>Valider une réservation</button>
    </div>
  );
}



export default Test;
