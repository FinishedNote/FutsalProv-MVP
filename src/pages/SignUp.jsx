import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleSignUp } from "../services/authService";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignUp = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        role: "",
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp(form, setLoading, navigate);
    };

    return (
        <div>
            <h2>Sign Up</h2>
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
                <Input
                    label="name"
                    type="text"
                    value={form.name}
                    onChange={(value) => setForm({ ...form, name: value })}
                />
                <div>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={(e) =>
                            setForm({ ...form, role: e.target.value })
                        }
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="arbitrator">Arbitre</option>
                        <option value="club">Club</option>
                        <option value="admin_comitee">
                            Administrateur comite
                        </option>
                    </select>
                </div>
                <SubmitButton title="Sign Up" isLoading={loading} />
            </form>
            <p>
                Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
        </div>
    );
};

export default SignUp;
