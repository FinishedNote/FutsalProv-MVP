import React from "react";
import { useNavigate } from "react-router-dom";

const ClubCard = ({ club }) => {
  const navigate = useNavigate();

  return (
    <li key={club.id}>
      <h2>{club.name}</h2>
      <p>{club.province}</p>
      <button onClick={() => navigate(`/clubs/${club.name}`)}>
        Voir Détails
      </button>
    </li>
  );
};

export default ClubCard;
