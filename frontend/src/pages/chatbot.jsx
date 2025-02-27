import React, { useState, useEffect } from 'react';
import { ChatBotIcon, SendIcon } from '../assets/icon';
import Typewriter from "typewriter-effect";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg w-72  overflow-hidden">
                    <div className="text-white p-3 flex justify-between items-center" style={{backgroundColor: "#567c8d"}}>
                        <h3 className="font-medium">Racer Support</h3>
                        <button 
                            onClick={toggleChatbox}
                            className="text-white hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="h-64 p-3 overflow-y-auto bg-gray-50">
                        {/* Chat messages would go here */}
                        <div className="mb-2 text-gray-600">
                        <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello! How can I help you today?")
                    .callFunction(() => {
                      // Stop blinking cursor after typing is complete
                      document.querySelector('.Typewriter__cursor').style.display = 'none';
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                  cursor: "|"
                }}
              />
                            
                        </div>
                    </div>
                    <div className="p-3 border-t border-gray-200">
                        <div className="flex">
                            <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
                            />
                            <button className="flex bg-[#567c8d] items-center text-white text-center rounded-r-md pr-2 hover:bg-[#2f4156]" >
                            <div className="ml-2 -mr-1"> 
                                {SendIcon}
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <button 
                onClick={toggleChatbox} 
                className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
            >
                {ChatBotIcon}
            </button>
        </div>
    );
};

export default Chatbot;