import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    addNotification(`Theme switched to ${theme === "light" ? "Dark" : "Light"} 🌙`);
  };

  // Login / Logout
  const login = (username) => {
    setUser(username);
    addNotification(`Welcome, ${username} 🎉`);
  };

  const logout = () => {
    addNotification(`Goodbye, ${user} 👋`);
    setUser(null);
  };

  // Notifications
  const addNotification = (msg) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, msg }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000); // auto-remove after 3s
  };

  return (
    <GlobalContext.Provider
      value={{ theme, toggleTheme, user, login, logout, notifications }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
