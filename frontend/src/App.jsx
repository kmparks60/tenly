import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RentLanding from "./components/RentLanding";
import RentPayment from "./components/RentPayment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rent" element={<RentLanding />} />
        <Route path="/pay" element={<RentPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
