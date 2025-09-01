import { useEffect } from "react";
import supabase from "./lib/supabaseClient";
import { setUser } from "./redux/slices/userSlice";
// routing
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: debug user profile in redux state
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .then(({ data }) => {
            dispatch(setUser(data[0]));
          });
      }
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .then(({ data }) => {
            dispatch(setUser(data[0]));
          });
      }
    });
    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
