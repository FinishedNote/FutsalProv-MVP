import { useNavigate } from "react-router-dom";
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
            <h2>Welcome to your dashboard {user?.name}!</h2>
            <h3>You can manage your account settings here.</h3>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Dashboard;
