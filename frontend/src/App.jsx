import "./App.css";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
// import TreatmentPlansPage from "./modules/treatmentPlans/treatmentPlansPage/treatmentPlansPage";
// import SessionsPage from "./modules/sessions/sessionsPage/sessionsPage";
// import HomePage from "./modules/home/homePage/homePage";
// import PatientsPage from "./modules/patients/patientsPage/patientsPage";

import { Routes, Route} from 'react-router-dom';
import {RouteDefine} from "./routes/RouteDefinitions"
import ErrorWin from "./components/errorWin/errorWin";





function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-content">
        <SideBar/>
        <Routes>
          {RouteDefine.map((route,index)=>(
            <Route key={index} element={route.element} path={route.path}/>
          ))}
        </Routes>
      </div>

      <ErrorWin/>
    </div>

  );
}

export default App;
