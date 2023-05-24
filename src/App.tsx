import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/nav-bar";
import { useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext)


  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default App;
