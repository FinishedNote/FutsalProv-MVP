import { useNavigate } from "react-router-dom";

const CompetitionCard = ({ name, season, id }) => {
  const navigate = useNavigate();

  return (
    <li>
      <h2>{name}</h2>
      <p>Saison: {season}</p>
      <button onClick={() => navigate(`/competitions/${id}`)}>
        Voir Détails
      </button>
    </li>
  );
};

export default CompetitionCard;
