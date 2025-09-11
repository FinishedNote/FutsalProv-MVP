import { useNavigate } from "react-router-dom";

const CompetitionCard = ({ competition }) => {
  const navigate = useNavigate();

  return (
    <li>
      <h2>{competition.name}</h2>
      <p>Saison: {competition.season}</p>
      <button
        onClick={() => navigate(`/dashboard/competitions/${competition.name}`)}
      >
        Voir Détails
      </button>
    </li>
  );
};

export default CompetitionCard;
