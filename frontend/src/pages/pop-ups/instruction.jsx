import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                    <h2 className="text-2xl font-bold mb-2" style={{color: "#567C8D"}}>Instructions</h2>
                    <div className='space-y-4' style={{color: "#2F4156"}}>
                        <p>Add your instruction content here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instruction;