import React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";

function App() {

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b1a4c'
      showAlert("Dark mode enabled", "Success!")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "Success!")

    }
  }

  function showAlert(message, type){
    setAlert({
      text: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

  return <>
    <Navbar title = "PlayWithText" mode= {mode} toggleMode= {toggleMode}></Navbar>
    <Alert alert = {alert}/>
    <div className="container">
    <TextField mode={mode} showAlert={showAlert}/>
    </div>
    
  </>;
}

export default App;
