import React, { useState } from "react";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser({ username, email, password });
      toast.success("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      toast.error(error.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="usernameInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>
                  Already have an account? <a href="/login">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
