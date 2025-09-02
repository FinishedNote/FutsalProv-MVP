// auth components
import supabase from "../lib/supabaseClient";

export const handleSignUp = async (form, setLoading, navigate) => {
  setLoading(true);

  const { email, password, username, role } = form;

  if (!email || !password || !username || !role) {
    console.error("Email, password, username, and role are required");
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
      .insert([{ id: userId, username, role }]);

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
    alert(error.message);
    setLoading(false);
  } else {
    console.log("User signed in:", user);
    navigate("/dashboard");
  }
};

export const forgotPassword = async (email) => {
  if (!email) {
    console.error("Email is required");
    return;
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/reset-password",
  });

  if (error) {
    console.error("Error sending reset password email:", error);
  }
};

export const resetPassword = async (password, confirmPassword) => {
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return;
  }
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    console.error("Error resetting password:", error);
  }
};
