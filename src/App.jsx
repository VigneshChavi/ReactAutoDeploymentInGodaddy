import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
