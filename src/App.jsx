import { useEffect } from "react";
import supabase from "./lib/supabaseClient";
import { clearUser, setUser } from "./redux/slices/userSlice";
// routing
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    const fetchUserProfile = async (userId) => {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("user_id", userId)
            .maybeSingle();

        if (error) {
            console.error(
                "Erreur lors de la récupération du profil :",
                error.message
            );
            return;
        }
        if (data) {
            dispatch(setUser(data));
        }
    };

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session?.user) {
                fetchUserProfile(session.user.id);
            }
        };

        getSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                fetchUserProfile(session.user.id);
            } else {
                dispatch(clearUser());
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [dispatch]);

    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
