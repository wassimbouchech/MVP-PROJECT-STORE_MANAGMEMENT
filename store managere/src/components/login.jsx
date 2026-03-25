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
    <div>
      <h1>log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">log in</button>
      </form>
    </div>
  );
}

export default login;
