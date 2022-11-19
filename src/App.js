import React,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";

function App() {

  const [mode,setMode] = useState('light');

  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b1a4c'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }
  }

  return <>
    <Navbar title = "PlayWithText" mode= {mode} toggleMode= {toggleMode}></Navbar>
    <div className="container">
    <TextField mode={mode}/>
    </div>
    
  </>;
}

export default App;
