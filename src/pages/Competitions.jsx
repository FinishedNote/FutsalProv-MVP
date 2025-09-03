import supabase from "../lib/supabaseClient";
import { useSelector } from "react-redux";
import { useCompetitions } from "../hooks/useCompetitions";
import { use } from "react";

const Competitions = () => {
  const user = useSelector((state) => state.user) || {};
  const { data: competitions, isLoading, error } = useCompetitions(user);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading competitions</p>;

  const handleCreateCompetition = async () => {
    if (!user) return;

    if (user.role !== "admin-comite") {
      alert("You do not have permission to create competitions");
      return;
    }

    await supabase
      .from("competitions")
      .insert({ name: "Provinciale Hainaut D3", season: "2025-2026" });
  };

  const handleAddClub = async (competitionId, clubId) => {
    if (!user) return;

    if (user.role !== "admin-comite") {
      alert("You do not have permission to add clubs");
      return;
    }

    const { error } = await supabase
      .from("competition_clubs")
      .insert([{ competition_id: competitionId, club_id: clubId }]);

    if (error) {
      console.error("Erreur:", error);
    } else {
      console.log("Club ajouté à la compétition");
    }
  };

  return (
    <div>
      <p>Competitions</p>
      <ul>
        {competitions.length > 0 ? (
          competitions.map((competition) => (
            <li key={competition.id}>{competition.name}</li>
          ))
        ) : (
          <p>No competitions found</p>
        )}
      </ul>
      <button onClick={handleCreateCompetition}>Create Competition</button>
      {user.role === "admin-comite" && (
        <button onClick={() => handleAddClub(competition.id, club.id)}>
          Add a Club
        </button>
      )}
    </div>
  );
};

export default Competitions;
