import '../index.css'
import React from "react";
import landingpg from '../assets/main/landing.png';

const Landing = () => {
    return(
        <div
        className="flex flex-col items-center h-screen w-screen m-0"
        style={{
          backgroundImage: `url(${landingpg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", 
          width: "100vw",  
        }}
        >
           
        </div>
    )
}

export default Landing