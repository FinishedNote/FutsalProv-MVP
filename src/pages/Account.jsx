import React from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { resetPassword } from "../services/authService";
import supabase from "../lib/supabaseClient";

const Account = () => {
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user?.email);

    // const { data: { user } } = await supabase.auth.getUser();
    // try {
    //   await resetPassword(user.email);
    //   alert("Mot de passe réinitialisé. Vérifiez votre email.");
    // } catch (error) {
    //   console.error("Erreur de réinitialisation du mot de passe:", error);
    // }
    return;
  };

  return (
    <div>
      <h1>Compte</h1>
      <p>Ceci est la page de compte.</p>

      <h2>Modifier le profil</h2>
      <form>
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Enregistrer les modifications</button>
      </form>
      <h2>Changer le mot de passe</h2>
      <form onSubmit={handlePasswordReset}>
        <Input
          label="Nouveau mot de passe"
          type="password"
          placeholder="Nouveau mot de passe"
          value={""}
          onChange={() => {}}
        />
        <br />
        <Input
          label="Confirmer le mot de passe"
          type="password"
          placeholder="Confirmer le mot de passe"
          value={""}
          onChange={() => {}}
        />
        <br />
        <SubmitButton title="Changer le mot de passe" isLoading={false} />
      </form>
    </div>
  );
};

export default Account;
