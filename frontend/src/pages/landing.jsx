import '../index.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import bus from '../assets/main/bus.png';
import car1 from '../assets/main/car1.png';
import car2 from '../assets/main/car2.png';
import bg from '../assets/main/bg.png';

const Landing = () => {
    return (
        <>
        <div className='w-full h-screen flex flex-row'>
            <div className='flex-1 flex items-center justify-center flex-col' style={{backgroundColor: '#567C8D'}}>
                <h1 className='font-black text-6xl pb-10' style={{color: '#e0dcda'}}>
                    Typer Racer
                </h1>
                <div className='flex flex-col gap-5'>
                    <Link to='/game'
                        className='px-36 py-3 font-bold rounded-lg flex justify-center items-center  transition-colors duration-500'
                        style={{ color: '#567C8D', backgroundColor: '#F5EFEB' }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#e0dcda';
                            e.target.style.backgroundColor = '#2F4156';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#567C8D';
                            e.target.style.backgroundColor = '#F5EFEB';
                        }}
                    >
                        Start Now
                    </Link>
                    <Link to='/instruction'
                        className='px-36 py-3 font-bold rounded-lg flex justify-center items-center transition-colors duration-500'
                        style={{ color: '#567C8D', backgroundColor: '#F5EFEB' }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#e0dcda';
                            e.target.style.backgroundColor = '#2F4156';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#567C8D';
                            e.target.style.backgroundColor = '#F5EFEB';
                        }}
                    >
                        Instruction
                    </Link>

                    <Link to='/credits'
                        className='px-36 py-3 font-bold rounded-lg flex justify-center items-center  transition-colors duration-500'
                        style={{ color: '#567C8D', backgroundColor: '#F5EFEB' }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#e0dcda';
                            e.target.style.backgroundColor = '#2F4156';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#567C8D';
                            e.target.style.backgroundColor = '#F5EFEB';
                        }}
                    >
                        Credits
                    </Link>
                </div>
            </div>

            <div className='bg-white flex-1 flex flex-col'>
                <div className='flex-3 overflow-hidden' 
                style={{ 
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full relative'>
                        <img 
                            src={car2} 
                            alt="car" 
                            className='absolute bottom-0 w-48'
                            style={{
                                animation: 'carLeft 6s linear infinite',
                                left: '-192px'
                            }}
                        />
                        <img 
                            src={car1} 
                            alt="car" 
                            className='absolute bottom-0 w-48'
                            style={{
                                animation: 'carRight 6s linear infinite',
                                right: '-192px'
                            }}
                        />
                        <img 
                            src={bus} 
                            alt="bus" 
                            className='absolute bottom-0 w-64'
                            style={{
                                animation: 'busLeftToRight 8s linear infinite',
                                left: '-256px'
                            }}
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <div className='flex-1' style={{backgroundColor: '#bbbdb9'}}/>
                    <div className='flex-3' style={{backgroundColor: '#c9d4c1'}}/>
                </div>
            </div>

            <style>{`
                @keyframes carLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(100vw + 192px)); }
                }

                @keyframes carRight {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100vw - 192px)); }
                }

                @keyframes busLeftToRight {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(100vw + 256px)); }
                }
            `}</style>
        </div>
        <Outlet />
        </>
    );
}

export default Landing;