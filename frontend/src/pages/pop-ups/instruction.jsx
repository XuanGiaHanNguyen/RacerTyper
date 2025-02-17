import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";

import bg from '../../assets/popup/road.jpg'

const Instruction = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="rounded-xl shadow-lg relative w-[90%] h-[80vh] overflow-auto" style={{backgroundColor: '#F5EFEB' }}>
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 text-xl transition-colors"
                >
                    ×
                </button>
                <div className='p-8 h-full'>
                    <h2 className="text-4xl font-bold mb-3" style={{color: "#567C8D"}}>
                    <Typewriter
                        options={{
                        strings: ["Instruction."],
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        deleteSpeed: 100,
                        }}
                    />
                    </h2>
                    <div className='text-xl flex flex-row' style={{color: "#2F4156"}}>
                        <div className='flex-1 space-y-2 font-semibold text-gray-500 p-4'>
                        <p>• Click "Start Now" on the menu page.</p>
                        <p>• Choose your difficulty from the top navigation bar.</p>
                        <p>• The test begins as soon as you start typing.</p>
                        <p>• A 60-second countdown tracks your time, displaying CPM (characters per minute), WPM (words per minute), and mistakes.</p>
                        <p>• Click "Reset" to restart the timer, clear errors, and reset your stats.</p>
                        <p>• No backspace! Once a character is typed, it cannot be deleted—so stay focused!</p>
                        <p>• It's OK if you do well - with practice you will get better! </p>
                        </div>
                        <div className='flex flex-1 rounded-xl opacity-75'  style={{ 
                                            backgroundImage: `url(${bg})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instruction;