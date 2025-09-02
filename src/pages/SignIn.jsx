import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSignIn } from "../services/authService";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(form, setLoading, navigate);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <Input
          label="Password"
          type="password"
          value={form.password}
          onChange={(value) => setForm({ ...form, password: value })}
        />
        <SubmitButton title="Sign In" isLoading={loading} />
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default SignIn;
