import "./App.css";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import TreatmentPlansPage from "./modules/treatmentPlans/treatmentPlansPage/treatmentPlansPage";
// import SessionsPage from "./modules/sessions/sessionsPage/sessionsPage";
// import HomePage from "./modules/home/homePage/homePage";
// import PatientsPage from "./modules/patients/patientsPage/patientsPage";







function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-content">
        <SideBar/>
        {/* <HomePage /> */}
        {/* <PatientsPage></PatientsPage> */}
        {/* <SessionsPage/> */}
        <TreatmentPlansPage/>
      </div>
    </div>

  );
}

export default App;
