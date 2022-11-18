import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";

function App() {
  return <>
    <Navbar title = "PlayWithText" ></Navbar>
    <div className="container">
    <TextField/>
    </div>
    
  </>;
}

export default App;
