// src/components/GoogleLogin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "1046826413814-8h4bkrnsamgn6m5v8218mkhs06e9jg9f.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleButton"),
        { theme: "outline", size: "large" }
      );
    };
  }, []);

  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
  };

  const handleContinue = () => {
    if (mobile.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    const fullUserData = {
      ...user,
      mobile,
    };

    // Optionally: Send to backend
    // fetch("http://localhost:5000/api/auth/google", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(fullUserData),
    // });

    localStorage.setItem("user", JSON.stringify(fullUserData));
    navigate("/welcome");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Google Login + Mobile</h2>
      {!user && <div id="googleButton"></div>}

      {user && (
        <div>
          <p>Welcome {user.name}, please enter your mobile number:</p>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
