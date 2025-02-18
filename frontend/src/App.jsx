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
        <Route path="/RacerTyper" element={<Landing/>}>
          <Route path="/RacerTyper/instruction" element={<Instruction/>}/>
          <Route path="/RacerTyper/motivation" element={<Motivation/>}/>
        </Route>
        <Route path="/RacerTyper/game" element={<Game/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
