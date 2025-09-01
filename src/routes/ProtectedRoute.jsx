import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    checkUser();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return user ? children : <Navigate to="/sign-in" replace />;
}
