import { useState } from "react";
import api from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      console.log(response.data);

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Success");

      // Redirect
      window.location.href = "/dashboard";

    } catch (error) {

      console.error(error);

      alert("Invalid Credentials");
    }
  };

  return (
    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>

    </div>
  );
}

export default Login;