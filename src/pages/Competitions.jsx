import { useState } from "react";
import { useCompetitions } from "../hooks/useCompetitions";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { createCompetition } from "../services/competitions";
import CompetitionCard from "../components/CompetitionCard";

const Competitions = () => {
  const { data: competitions, isLoading, error } = useCompetitions();
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState({ name: "", season: "" });
  const [loading, setLoading] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading competitions</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, season } = form;

    if (!name || !season) {
      alert("Please fill in all fields");
      return;
    }

    createCompetition({ name, season, createdBy: user.user_id });
  };

  return (
    <div>
      <ul>
        {competitions && competitions.length > 0 ? (
          competitions.map((c) => (
            <CompetitionCard key={c.id} competition={c} />
          ))
        ) : (
          <li>Aucunes compétitions trouvées</li>
        )}
      </ul>
      {user?.role == "admin_comitee" && (
        <form onSubmit={handleSubmit}>
          <Input
            label="Nom de la compète"
            onChange={(value) => setForm({ ...form, name: value })}
            type="text"
            placeholder="ex: compète 123"
          />
          <Input
            label="Nom de la saison"
            onChange={(value) => setForm({ ...form, season: value })}
            type="text"
            placeholder="ex: 2025-2026"
          />
          <SubmitButton title="Créer" isLoading={loading} />
        </form>
      )}
    </div>
  );
};

export default Competitions;
