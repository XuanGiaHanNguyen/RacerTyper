import '../index.css';
import React, { useState, useEffect } from "react";
import landingpg from '../assets/main/landing.png';

import Car1 from '../assets/main/Car1.png'; 
import Bus from '../assets/main/Bus.png'; 
import Car from '../assets/main/car.png'; 
import bush from '../assets/main/bush.png'; 
import bench from '../assets/main/bench.png'; 
import tree from '../assets/main/tree.png'; 


const Landing = () => {
    const [carPosition, setCarPosition] = useState(window.innerWidth);
    const [busPosition, setBusPosition] = useState(-300);
    const [Car2Position, setCar2Position] = useState(-500);

    useEffect(() => {
        const moveCar = setInterval(() => {
            setCarPosition(prev => (prev < -200 ? window.innerWidth : prev - 5));
        }, 50);

        const moveBus = setInterval(() => {
            setBusPosition(prev => (prev > window.innerWidth ? -300 : prev + 4));
        }, 50);

        const moveCar2 = setInterval(() => {
            setCar2Position(prev => (prev > window.innerWidth ? -300 : prev + 6));
        }, 50);

        return () => {
            clearInterval(moveCar);
            clearInterval(moveBus);
            clearInterval(moveCar2);
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
            <h1 className='font-black text-8xl mt-32 text-gray-600'>
              Typer Racer
            </h1>
            <button
                className="mt-8 px-32 py-2 text-2xl font-black text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.05]"
                style={{ backgroundColor: "#f5c6ac" }}
                >
                Start Now
            </button>
            <div className='relative flex w-full mt-20 pb-48'>
                <img src={tree} alt="tree" className='absolute bottom-0 w-56' style={{zIndex: 2 }} />
                <img src={bush} alt="bush" className='absolute bottom-0 w-32' style={{ zIndex: 1 }} />
                <img src={bush} alt="bush" className='absolute bottom-0 left-10 w-32' style={{ zIndex: 1 }} />
                <img src={bush} alt="bush" className='absolute bottom-0 right-0 w-48' style={{ zIndex: 1 }} />
                <img src={bench} alt="bench" className='absolute bottom-0 right-1 w-40' style={{  zIndex: 1 }} />
                <img src={Car1} alt="Car1" className='absolute bottom-0 w-40' style={{ left: `${carPosition}px`, zIndex: 2 }} />
                <img src={Bus} alt="Bus" className='absolute bottom-0 w-48' style={{ left: `${busPosition}px`, zIndex: 1 }} />
                <img src={Car} alt="Car2" className='absolute bottom-0 w-40' style={{ left: `${Car2Position}px`, zIndex: 1 }} />
            </div>
            <div className=' w-full h-48' style={{ backgroundColor: "#c3c9bf" }}>

            </div>
        </div>
    );
}

export default Landing;

