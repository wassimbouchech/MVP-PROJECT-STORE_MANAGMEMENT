import React, { useState } from "react";

function login({ handleLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      handleLogin(username);
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="login-title">log In</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-submit">
            log in
          </button>
      </form>
    </div>
  );
}

export default login;
