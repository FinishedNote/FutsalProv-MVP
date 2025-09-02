import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabaseClient";

const fetchCompetitions = async () => {
  const { data } = await supabase.from("competitions").select("*");
  return data;
};

const Competitions = () => {
  const {
    data: competitions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["competitions"],
    queryFn: fetchCompetitions,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading competitions</p>;

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
    </div>
  );
};

export default Competitions;
