import "./App.css";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";


import { Routes, Route} from 'react-router-dom';
import {RouteDefine} from "./routes/RouteDefinitions"
import ErrorWin from "./components/errorWin/errorWin";
import Loading from "./components/loading/loading";
import Warning from "./components/warning/warning";

import ProtectedRoute from "./auth/protectedRoute";
import AccountPage from "./modules/account/accountPage/accountPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-content">
        <SideBar/>
        <Routes>
          {RouteDefine.map((route,index)=>(

            <Route element={<ProtectedRoute/>}>{<Route key={index} element={route.element} path={route.path}/>}</Route>
            
          ))}
          <Route path="/account" element={<AccountPage/>}/>
        </Routes>
      </div>

      <ErrorWin/>
      <Loading/>
      <Warning/>
    </div>

  );
}

export default App;
