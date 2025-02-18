import '../index.css';
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import ResultsPopup from './pop-ups/ResultsPopup';

import car1 from '../assets/main/car1.png';
import truck from '../assets/main/foodtruck.png'
import car2 from '../assets/main/car2.png';
import bus from '../assets/main/bus.png';


const Game = () => {

    const [showResults, setShowResults] = useState(false);
    const maxTime = 60; 
    const [timeLeft, setTimeLeft] = useState(60);
    const [mistake, setMistake] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [CPM, setCPM] = useState(0); 

    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false); 

    const [currentParagraph, setCurrentParagraph] = useState('medium'); 

    const inputRef = useRef(null);
    const charRef = useRef([]);
    const [correctWrong, setCorrectWrong] = useState([])

    const handleChange = (e) => {
        if (showResults) return;
    
        const typedChar = e.target.value.slice(-1);
        e.target.value = '';
    
        const characters = charRef.current;
        if (!characters || charIndex >= characters.length || timeLeft <= 0) {
            return;
        }
    
        let currentChar = characters[charIndex];
        if (!currentChar) return;
    
        // Only set isTyping to true on the first character
        if (!isTyping && timeLeft === maxTime) {
            setIsTyping(true);
        }
    
        // check whether what we typed in is correct or not
        if (typedChar === currentChar.textContent) {
            setCharIndex(prev => prev + 1);
            correctWrong[charIndex] = ' correct ';
        } else {
            setCharIndex(prev => prev + 1);
            setMistake(prev => prev + 1);
            correctWrong[charIndex] = ' wrong ';
        }
    
        // check if finished
        if (charIndex === characters.length - 1) {
            setIsTyping(false);
            setShowResults(true);
        }
    }

    const paragraphs = {
        easy: "The sun is shining brightly, and the sky is a clear shade of blue. Birds fly high above, chirping as they glide through the air. Children laugh and play in the park, running across the soft green grass. A gentle breeze rustles the leaves, making the trees sway back and forth. It is a perfect day to relax, take a deep breath, and enjoy the beauty of nature all around.",
        medium: "Technology has transformed the way we communicate, work, and interact with the world. With just a few clicks, we can send messages across continents, connect with loved ones, or access a wealth of information. Businesses rely on digital tools to improve efficiency and streamline operations. As innovation continues to shape our daily lives, adapting to new advancements has become essential. The rapid growth of technology challenges us to learn and evolve constantly.",
        master: "In an era driven by rapid technological advancements, adaptability has become more crucial than ever. Artificial intelligence, automation, and data science are revolutionizing industries, altering the way we work and solve problems. As machines take over repetitive tasks, human creativity and critical thinking grow in importance. Continuous learning is the key to staying relevant in a fast-paced world. Embracing change not only fosters resilience but also opens the door to new opportunities and groundbreaking innovations.",
        hard: "Mastery demands precision and speed in a world of constant innovation. Quantum computing, neural networks, and cybersecurity redefine technology's limits. As AI transforms industries, ethical dilemmas arise, requiring responsible solutions. Adaptability and critical thinking are essential to navigate this evolving landscape. Those who embrace complexity with determination will shape the future."
    }

    const handleDifficultyChange = (difficulty) => {
        setCurrentParagraph(difficulty);
        ResetGame();
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [positions, setPositions] = useState({
        car1: windowWidth, // Start from right side
        car2: -400,
        truck: -800,
        bus: -1200,
    });

    useEffect(() => {
        inputRef.current.focus();
        setCorrectWrong(Array(charRef.current.length).fill(''))
    }, [currentParagraph]
    );

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

    useEffect(() => {
        let interval;
        // Start timer when typing begins and keep it running
        if (isTyping && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
                
                let correctChars = charIndex - mistake;
                let totalTime = maxTime - timeLeft;
    
                let CPM = correctChars * (60 / totalTime);
                CPM = CPM < 0 || !CPM || CPM === Infinity ? 0 : CPM;
                setCPM(parseInt(CPM, 10));
    
                let wpm = Math.round((correctChars / 5 / totalTime) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                setWPM(parseInt(wpm, 10));
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsTyping(false);
            setShowResults(true);
        }
    
        return () => clearInterval(interval);
    }, [isTyping, timeLeft]); // Remove charIndex and mistake from dependencies

    const ResetGame = () => {
        setIsTyping(false);
        setTimeLeft(60);
        setCharIndex(0);
        setMistake(0);
        setCPM(0);
        setWPM(0);
        setShowResults(false);
        setCorrectWrong(Array(charRef.current.length).fill(''));
        if (inputRef.current) {
            inputRef.current.value = ''; // Clear the input
            inputRef.current.focus();
        }
    }

    const getTransitionStyle = (position) => {
        return {
          transform: `translateX(${position}px)`,
          transition: 'transform 0.016s linear'
        };
      };

    return (
        <div className="flex flex-col h-screen">
            <div className='w-full' style={{backgroundColor: '#C8D9E6'}}>
                <div className=' pb-2 mx-32 grid grid-cols-5 font-bold rounded-b-2xl bg-gray-100' style={{ color: '#2F4156'}}>
                <button 
                        className='pt-1 transition transform duration-300 ease-in-out hover:scale-110 hover:opacity-80 mx-10 mb-2 pb-3 rounded-b-2xl hover:bg-gray-400 hover:text-white'
                        onClick={() => handleDifficultyChange('easy')}
                    >Easy</button>
                    <button 
                        className='pt-1 transition transform duration-300 ease-in-out hover:scale-110 hover:opacity-80 mx-10 mb-2 pb-3 rounded-b-2xl hover:bg-gray-400 hover:text-white'
                        onClick={() => handleDifficultyChange('medium')}
                    >Medium</button>
                    <Link
                        to='/RacerTyper'
                        className='py-2 text-center font-bold text-xl rounded-b-2xl' 
                        style={{backgroundColor: '#567C8D', color: '#f0ebe9'}}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#2F4156';
                            e.target.style.backgroundColor = '#d6d6d6';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#f0ebe9';
                            e.target.style.backgroundColor = '#567C8D';
                        }}
                    >Typer Racer</Link>
                    <button 
                        className='pt-1 transition transform duration-300 ease-in-out hover:scale-110 hover:opacity-80 mx-10 mb-2 pb-3 rounded-b-2xl hover:bg-gray-400 hover:text-white'
                        onClick={() => handleDifficultyChange('hard')}
                    >Hard</button>
                    <button 
                        className='pt-1 transition transform duration-300 ease-in-out hover:scale-110 hover:opacity-80 mx-10 mb-2 pb-3 rounded-b-2xl hover:bg-gray-400 hover:text-white'
                        onClick={() => handleDifficultyChange('master')}
                    >Master</button>
                </div>
            </div>
            <div className="flex-1 relative overflow-hidden" style={{
                backgroundColor: '#C8D9E6'
            }}>
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
            <div className="flex-2 flex flex-col">
                <div className="flex-1" style={{backgroundColor: '#bbbdb9'}}>
                </div>
                <div className="flex-12" style={{backgroundColor: '#c9d4c1'}}>
                    <div className=''>
                        <div className=' mt-10 pb-8 mx-10 rounded-t-2xl px-10 pt-5' style={{backgroundColor: '#f0ebe9' }}>
                            <div id='result'>
                                <div className='grid grid-cols-5 font-bold text-xl text-gray-600 pb-3' style={{color: '#567C8D'}}>
                                    <p className='pl-5 py-3'>Time Left: <strong className='text-2xl pl-1'>{timeLeft}</strong> </p>
                                    <p className='pl-5 py-3'>Mistake: <strong className='text-2xl pl-1'>{mistake}</strong></p>
                                    <p className='pl-5 py-3'>WPM: <strong className='text-2xl pl-1'>{WPM}</strong></p>
                                    <p className='pl-5 py-3'>CPM: <strong className='text-2xl pl-1'>{CPM}</strong></p>
                                    <button className='py-3 mx-5 rounded-xl' onClick={ResetGame} style={{ color: '#f0ebe9', backgroundColor: '#567C8D' }}

                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#d6d6d6';
                                            e.target.style.backgroundColor = ' #2F4156';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#f0ebe9';
                                            e.target.style.backgroundColor = '#567C8D';
                                        }}

                                    >Restart</button>
                                </div>
                            </div>
                            <hr className='border-2 border-gray-400' />
                            <div id='test' className='py-5 px-6'>
                            <input type="text" className="opacity-0 absolute -z-99" onChange={handleChange} ref={inputRef} />

                            
            {
                paragraphs[currentParagraph].split('').map((char,index)=> (
                    <span 
                        key={index}
                        className={`text-2xl text-gray-500 font-semibold leading-loose ${
                            index === charIndex ? 'underline underline-offset-5 decoration-4 decoration-gray-500': ''
                        } ${
                            correctWrong[index] === ' correct ' ? 'text-green-700' : ''
                        } ${
                            correctWrong[index] === ' wrong ' ? 'text-red-700 bg-red-100' : ''
                        }`} 
                        ref={(e)=> {
                            charRef.current[index] = e
                        }}
                    >
                        {char}
                    </span>
                ))
            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ResultsPopup 
                mistake={mistake}
                WPM={WPM}
                CPM={CPM}
                onTryAgain={ResetGame}
                isVisible={showResults}
            />
        </div>
    );
};

export default Game;