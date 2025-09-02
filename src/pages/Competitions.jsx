import supabase from "../lib/supabaseClient";
import { useSelector } from "react-redux";
import { useCompetitions } from "../hooks/useCompetitions";

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
    </div>
  );
};

export default Competitions;
