import { Routes, Route } from "react-router-dom";
import Landing from "./view/Landing";
import Home from "./view/Home";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
