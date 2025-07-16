// src/pages/WelcomePage.jsx
import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome Page</h2>
      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <img src={user.picture} alt="User" width={100} />
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default WelcomePage;
