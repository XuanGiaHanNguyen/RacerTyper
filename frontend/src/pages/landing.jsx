import '../index.css';
import React, { useState, useEffect } from "react";
import landingpg from '../assets/main/landing.png';

import Car1 from '../assets/main/Car1.png'; 
import Bus from '../assets/main/Bus.png'; 
import Tree from '../assets/main/Tree.png';

const Landing = () => {
    const [carPosition, setCarPosition] = useState(window.innerWidth);
    const [busPosition, setBusPosition] = useState(-300);

    useEffect(() => {
        const moveCar = setInterval(() => {
            setCarPosition(prev => (prev < -200 ? window.innerWidth : prev - 5));
        }, 50);

        const moveBus = setInterval(() => {
            setBusPosition(prev => (prev > window.innerWidth ? -300 : prev + 4));
        }, 50);

        return () => {
            clearInterval(moveCar);
            clearInterval(moveBus);
        };
    }, []);

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
            <h1 className='font-black text-8xl mt-24 text-gray-600'>
              Typer Racer
            </h1>
            <button
                className="mt-8 px-32 py-2 text-2xl font-black text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.05]"
                style={{ backgroundColor: "#f5c6ac" }}
                >
                Start Now
                </button>
            <div className='relative flex w-full mt-30 pb-48'>
                <img src={Car1} alt="Car1" className='absolute bottom-14 w-48' style={{ left: `${carPosition}px`, zIndex: 2 }} />
                <img src={Bus} alt="Bus" className='absolute bottom-24 w-56' style={{ left: `${busPosition}px`, zIndex: 1 }} />
                <img src={Tree} alt="Tree" className='w-60 absolute bottom-0 left-0' style={{ zIndex: 3 }} />
            </div>
        </div>
    );
}

export default Landing;
