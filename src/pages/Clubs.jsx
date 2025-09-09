import ClubCard from "../components/ClubCard";
import { useClubs } from "../hooks/useClubs";

const Clubs = () => {
  const { data: clubs, isLoading, error } = useClubs();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading clubs</p>;

  return (
    <div>
      <ul>
        {clubs && clubs.length > 0 ? (
          clubs.map((c) => <ClubCard key={c.id} club={c} />)
        ) : (
          <li>Aucun clubs trouvées</li>
        )}
      </ul>
    </div>
  );
};

export default Clubs;
