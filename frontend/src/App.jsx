import React from "react";
import "./index.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"; 

import Landing from "./pages/landing";
import Game from "./pages/game";
import Instruction  from './pages/pop-ups/instruction';
import Motivation from './pages/pop-ups/motivation';

// name of the function must be capitalized

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>}>
        <Route path="/instruction" element={<Instruction/>}/>
        <Route path="/motivation" element={<Motivation/>}/>
      </Route>
      <Route path="/game" element={<Game/>}/>
    </Routes>
   </Router>
  )
}

export default App
