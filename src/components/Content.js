import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Content = () => {
  const { theme, user } = useContext(GlobalContext);

  return (
    <div className={`content ${theme}`}>
      <h3>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h3>
      {user ? (
        <p>Welcome back, <strong>{user}</strong>! 🚀</p>
      ) : (
        <p>Please log in to access your personalized dashboard.</p>
      )}
    </div>
  );
};

export default Content;
