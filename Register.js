import "./Auth.css";
import { useState } from "react";
import api from "../services/api";

function Register() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      const response = await api.post(
        "/auth/register",
        {
          fullName,
          email,
          password,
          phone: "",
          role: "SUPER_ADMIN"
        }
      );

      alert(response.data.message);

    } catch (error) {

  console.log(error);

  alert(
    error.response?.data?.message ||
    error.message ||
    "Registration Failed"
  );
}
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join TailorHub Today</p>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registerUser}>
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;