// auth components
import supabase from "../lib/supabaseClient";

export const handleSignUp = async (form, setLoading, navigate) => {
  setLoading(true);

  const { email, password, username } = form;

  if (!email || !password || !username) {
    console.error("Email, password, and username are required");
    return;
  }

  try {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );
    if (signUpError) throw signUpError;

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (signInError) throw signInError;

    const userId = signUpData.user.id;

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([{ id: userId, username }]);

    if (profileError) throw profileError;

    console.log("Compte et profil créés :", profileData);
    navigate("/dashboard");
  } catch (error) {
    console.error("Erreur:", error.message);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

export const handleSignIn = async (form, setLoading, navigate) => {
  setLoading(true);
  const { email, password } = form;

  if (!email || !password) {
    console.error("Email and password are required");
    return;
  }

  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("Error signing in:", error);
  } else {
    console.log("User signed in:", user);
    navigate("/dashboard");
  }
};
