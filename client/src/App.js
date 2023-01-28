import { Routes, Route } from "react-router-dom";
import {Landing, Home, Form, Detail} from "./view"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/create' element={<Form />}/>
    </Routes>
  );
}

export default App;
