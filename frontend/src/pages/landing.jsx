import '../index.css';
import React, { useState, useEffect } from "react";

const Landing = () => {
   
    return(
        <div className='w-full h-screen flex flex-row'>
            <div className='flex-1 flex items-center justify-center flex-col'  style={{backgroundColor: '#567C8D'}}>
                <h1 className='font-black text-6xl pb-4' style={{color: '#e0dcda'}}>
                    Typer Car 
                </h1>
                <button>
                    Start Now 
                </button>
                <button>
                    Rules
                </button>
                <button>
                    Credits
                </button>
            </div>
            <div className='bg-white flex-1 flex flex-col'>
                <div className='flex-3' style={{backgroundColor: '#C8D9E6'}}>

                </div>
                <div className='flex-1 flex flex-col'>
                    <div className='flex-1' style={{backgroundColor: '#bbbdb9'}}/>
                    <div className='flex-3' style={{backgroundColor: '#c9d4c1'}}/>
                </div>
            </div>
        </div>
    );
}

export default Landing;

