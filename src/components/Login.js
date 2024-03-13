import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const dummyUsername = "Uday";
    const dummyPassword = "Uday123";
    if (username === dummyUsername && password === dummyPassword) {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div
      style={{
        width: "500px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleLogin}>
        <h3 className="text-center">Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPasssword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
