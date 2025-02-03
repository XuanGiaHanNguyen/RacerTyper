import React from "react";
import "./index.css";
import Landing from "./pages/landing";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"; 

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
   </Router>
  )
}

export default App
