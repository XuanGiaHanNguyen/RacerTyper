import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom"; 

import Landing from "./pages/landing";
import Game from "./pages/game";
import Instruction  from './pages/pop-ups/instruction';
import Motivation from './pages/pop-ups/motivation';
import LoadingScreen from "./pages/loading/LoadingScreen";
import Chatbot from "./pages/chatbot";



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
        <Route path="/RacerTyper/loading" element={<LoadingScreen/>}/>
        <Route path="*" element={<Navigate to="/RacerTyper" />} />
      </Routes>
      <Chatbot></Chatbot>
   </BrowserRouter>
  )
}

export default App
