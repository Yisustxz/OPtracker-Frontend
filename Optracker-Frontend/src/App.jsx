import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FamilyCode from "./pages/FamilyCode";
import { LoginPage } from "./pages/LoginPage";
import MedTeamProfile from "./pages/MedTeamProfile";
import PatientPage from "./pages/PatientPage";
import PatientProfile from "./pages/PatientProfile";
import PatientTracker from "./pages/PatientTracker";
import HomePage from "./pages/homepage";
import MedTeams from "./pages/medTeams";
import NewMedTeams from "./pages/newMedTeams";
import { NewSurgery } from "./pages/newSurgery";
import PatientRegistration from "./pages/patienteRegistration";
import ProcedurePage from "./pages/procedurePage";
import SurgeryPage from "./pages/surgery";
import SurgeryData from "./pages/surgeryData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/patientRegistration" element={<PatientRegistration />} />
        <Route path="/patientProfile" element={<PatientProfile />} />
        <Route path="/surgery" element={<SurgeryPage />} />
        <Route path="/newSurgery" element={<NewSurgery />} />
        <Route path="/procedure" element={<ProcedurePage />}></Route>
        <Route path="/surgeryData" element={<SurgeryData />}></Route>
        <Route path="/familyCode" element={<FamilyCode />} />
        <Route path="/patientTracker" element={<PatientTracker />} />
        <Route path="/medTeams" element={<MedTeams />} />
        <Route path="/newMedTeams" element={<NewMedTeams />} />
        <Route path="/medTeamProfile" element={<MedTeamProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
