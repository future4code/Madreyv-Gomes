import react from "react";
import { GlobalStyle } from "./App.css";
import CreateTripPage from "./pages/CreateTripPage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage"
import TripDetailsPage from "./pages/TripDetailsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <TripDetailsPage />
    </>
  );
}

export default App;
