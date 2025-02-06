import React from "react";
import "./index.css";
import Landing from "./pages/landing";
import Game from "./pages/game";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"; 

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
   </Router>
  )
}

export default App
