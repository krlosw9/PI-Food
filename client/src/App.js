import { Routes, Route } from "react-router-dom";
import {Landing, Home, Form, Detail} from "./view"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/detail' element={<Form />}/>
      <Route path='/create' element={<Detail />}/>
    </Routes>
  );
}

export default App;
