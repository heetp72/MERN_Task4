import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { theme, toggleTheme, user, login, logout } = useContext(GlobalContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h2>⚡ Dynamic Context App</h2>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        {user ? (
          <button onClick={logout}>Logout ({user})</button>
        ) : (
          <button onClick={() => login("Heet Patel")}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
