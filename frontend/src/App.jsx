import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter} from "react-router-dom"; 

import Landing from "./pages/landing";
import Game from "./pages/game";
import Instruction  from './pages/pop-ups/instruction';
import Motivation from './pages/pop-ups/motivation';

// name of the function must be capitalized

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/racertyper" element={<Landing/>}>
          <Route path="/racertyper/instruction" element={<Instruction/>}/>
          <Route path="/racertyper/motivation" element={<Motivation/>}/>
        </Route>
        <Route path="/racertyper/game" element={<Game/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
