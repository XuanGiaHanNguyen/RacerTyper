import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";

import { GitHubIcon,LinkedInIcon, FaceBookIcon } from '../../assets/icon';

const Motivation = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="rounded-xl shadow-lg relative w-[85%] h-[60vh] overflow-auto" style={{backgroundColor: '#F5EFEB' }}>
                <button
                    onClick={() => navigate('/RacerTyper')}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 text-xl transition-colors"
                >
                    ×
                </button>
                <div className='p-8 h-full'>
                <h2 className="text-4xl font-bold mb-2" style={{color: "#567C8D"}}>
                    <Typewriter
                        options={{
                        strings: ["Motivation."],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50,
                        }}
                    />
                    </h2>
                    <div className='text-lg flex flex-row gap-3' style={{color: "#2F4156"}}>
                                            <div className='flex-1 space-y-1 p-4 font-semibold text-gray-600'>
                                            <p>• Typer Racer was created to help young children become familiar with technology early on, especially by improving their keyboard skills.</p>  
                                            <p>• Its fun and engaging car-themed design encourages kids to explore the world of computer science from an early age.</p>

                                            

                                            </div>
                                            <div className='flex flex-1 rounded-xl opacity-75'  
                                                            >
                                                                <div className=' px-5 py-5 pb-4 mt-3 rounded-xl text-center' style={{backgroundColor: '#567C8D'}}>
                                                <h3 className='text-2xl font-bold pb-2' style={{color: '#F5EFEB'}}>About the developer</h3>
                                                <div className='p-5 font-semibold text-start pl-8 rounded-xl bg-gray-50'>
                                                    <p>Name: Xuan Gia Han Nguyen</p>
                                                    <p>Education: University of South Florida</p>
                                                    <p className='pb-4'>Degree: Computer Science</p>
                                                    <div className=' flex flex-row justify-center gap-4'>
                                                    <a href='https://www.facebook.com/GiaHan14032006' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{FaceBookIcon}</a>
                                                    <a href='https://www.Linkedin.com/in/xuangiahannguyen/' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{LinkedInIcon}</a>
                                                    <a href='https://github.com/XuanGiaHanNguyen' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{GitHubIcon}</a>
                                                    <a href='https://xuangiahannguyen.github.io/PortfolioWebsite/' className='px-5 pt-2 font-black text-gray-50 rounded-lg  hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>My Website</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                    
                                            </div>
                                        </div>
                </div>
            </div>
        </div>
    );
}

export default Motivation; 