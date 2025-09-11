import { Link, useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/sign-in");
  };

  return (
    <div>
      <h2>Bienvenue sur le tableau de bord {user?.name}!</h2>
      <h3>Vous pouvez gérer les paramètres de votre compte ici.</h3>
      <Link to="account">Mettre à jour le profil</Link>
      <br />
      <Link to="competitions">Voir les compétitions</Link>
      <br />
      <Link to="clubs">Voir les clubs</Link>
      <br />
      <button onClick={handleSignOut}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;
