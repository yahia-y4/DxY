import "./App.css";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import HomePage from "./modules/home/homePage/homePage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-content">
        <SideBar/>
        <HomePage />
      </div>
    </div>

  );
}

export default App;
