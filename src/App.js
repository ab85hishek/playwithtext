import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(mode);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1a4c";
      showAlert("Dark mode enabled", "Success!");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success!");
    }
  }

  function showAlert(message, type) {
    setAlert({
      text: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function showTheme(value) {
    setTheme(value);
    document.body.style.backgroundColor = theme;
  }

  return (
    <>
      <Router>
        <Navbar
          title="PlayWithText"
          mode={mode}
          toggleMode={toggleMode}
          showTheme={showTheme}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route path="/" element={<TextField mode={mode} showAlert={showAlert} />}></Route>
          <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
