import { useState } from "react";
import { forgotPassword } from "../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendResetLink = async (e) => {
    e.preventDefault();
    forgotPassword(email);
  };

  return (
    <div>
      <h1>Réinitialiser le mot de passe</h1>
      <input
        type="email"
        placeholder="Entrez votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendResetLink}>
        Envoyer le lien de réinitialisation
      </button>
    </div>
  );
};

export default ForgotPassword;
