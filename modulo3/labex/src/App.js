import react, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { GlobalStyle } from "./App.css";
import CreateTripPage from "./pages/CreateTripPage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage"
import TripDetailsPage from "./pages/TripDetailsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripPage";
import { applyToTrip, getTrips } from "./Services.js/Api";

function App() {

  const [trips, setTrips] = useState([])
  
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="trips" element={<ListTripPage onCliclFunction={setTrips}/>} />
        <Route path="trips/application" element={<ApplicationFormPage trips={trips}/>}/>
        <Route path="admArea" element={<AdminHomePage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="admArea/createTrip" element={<CreateTripPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
