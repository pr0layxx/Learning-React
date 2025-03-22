import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function LogIn() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Log In</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LogIn;
