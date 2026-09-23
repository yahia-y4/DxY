import "./App.css";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";


import { Routes, Route} from 'react-router-dom';
import {RouteDefine} from "./routes/RouteDefinitions"
import ErrorWin from "./components/errorWin/errorWin";
import Loading from "./components/loading/loading";
import Warning from "./components/warning/warning";



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
      <Loading/>
      <Warning/>
    </div>

  );
}

export default App;
