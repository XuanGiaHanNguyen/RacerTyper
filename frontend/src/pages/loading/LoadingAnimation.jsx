import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import car1 from '../../assets/main/car1.png'; 
import car2 from '../../assets/main/car2.png'; 
import bus from '../../assets/main/bus.png'; 
import truck from '../../assets/main/foodtruck.png'; 
import bg from '../../assets/main/bg.png'; 

const LoadingAnimation = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      // Update progress every 50ms to complete in 5 seconds (100 steps × 50ms = 5000ms)
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) return prev + 1;
          return prev;
        });
      }, 50); // Changed from 100ms to 50ms to complete in 5 seconds

      const timer = setTimeout(() => {
        navigate('/RacerTyper/game');
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }, [navigate]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [positions, setPositions] = useState({
        car1: windowWidth, // Start from right side
        car2: -400,
        truck: -800,
        bus: -1200,
    });
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
        
    useEffect(() => {
        const animate = () => {
            setPositions(prev => ({
                car1: prev.car1 <= -160 ? windowWidth : prev.car1 - 2, // Moving left
                car2: prev.car2 >= windowWidth ? -160 : prev.car2 + 3,
                truck: prev.truck >= windowWidth ? -160 : prev.truck + 1,
                bus: prev.bus >= windowWidth ? -200 : prev.bus + 1.5,
            }));
        };
        
        const animationFrame = setInterval(animate, 16);
        return () => clearInterval(animationFrame);
    }, [windowWidth]);

    const getTransitionStyle = (position) => {
        return {
            transform: `translateX(${position}px)`,
            transition: 'transform 0.016s linear'
        };
    };
    
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center " style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="flex-1 relative overflow-hidden w-full">
                <img 
                    src={car1} 
                    alt="car1" 
                    width="160"
                    className="absolute bottom-0"
                    style={getTransitionStyle(positions.car1)}
                />
                <img 
                    src={car2}
                    alt="car2"
                    width="160"
                    className="absolute bottom-0"
                    style={getTransitionStyle(positions.car2)}
                />
                <img 
                    src={truck}
                    alt="truck"
                    width="160"
                    className="absolute bottom-0"
                    style={getTransitionStyle(positions.truck)}
                />
                <img 
                    src={bus}
                    alt="bus"
                    width="200"
                    className="absolute bottom-0"
                    style={getTransitionStyle(positions.bus)}
                />
            </div>
            <div className='flex-3 w-full flex flex-col'>
                <div className='flex-1' style={{backgroundColor: '#bbbdb9'}}/>
                <div className='flex-12 flex flex-col justify-center items-center gap-5' style={{backgroundColor: '#c9d4c1'}}>
                    <div className="w-1/2 h-8 bg-[#abb5c2] rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#F5EFEB] transition-all duration-100 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="mt-2 text-white text-4xl font-black tracking-wider">
                        Loading
                        <span className="inline-flex animate-pulse">
                            <span className="ml-1 text-4xl font-black">.</span>
                            <span className="ml-1 text-4xl font-black">.</span>
                            <span className="ml-1 text-4xl font-black">.</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
