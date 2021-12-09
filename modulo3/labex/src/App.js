import react from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { GlobalStyle } from "./App.css";
import CreateTripPage from "./pages/CreateTripPage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage"
import TripDetailsPage from "./pages/TripDetailsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripPage";
import { getTrips } from "./Services.js/Api";

function App() {
  getTrips()
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="trips" element={<ListTripPage/>} />
        <Route path="trips/application" element={<ApplicationFormPage/>} />
        <Route path="admArea" element={<AdminHomePage/>} />
        <Route path="admArea/createTrip" element={<CreateTripPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
