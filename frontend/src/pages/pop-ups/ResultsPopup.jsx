import React from 'react';
import { Link } from 'react-router-dom';

const ResultsPopup = ({ mistake, WPM, CPM, onTryAgain, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl" style={{backgroundColor: "#b5b5b5"}}>
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: '#f5efeb' }}>
          Typing Results
        </h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
            <span className="font-semibold" style={{ color: '#567C8D' }}>Mistakes:</span>
            <span className="text-xl font-bold" style={{ color: '#2F4156' }}>{mistake}</span>
          </div>
          
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
            <span className="font-semibold" style={{ color: '#567C8D' }}>Words Per Minute:</span>
            <span className="text-xl font-bold" style={{ color: '#2F4156' }}>{WPM}</span>
          </div>
          
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
            <span className="font-semibold" style={{ color: '#567C8D' }}>Characters Per Minute:</span>
            <span className="text-xl font-bold" style={{ color: '#2F4156' }}>{CPM}</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={onTryAgain}
            className="flex-1 py-3 rounded-xl font-bold transition-colors duration-200"
            style={{ 
              backgroundColor: '#567C8D',
              color: '#f0ebe9'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2F4156';
              e.target.style.color = '#d6d6d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#567C8D';
              e.target.style.color = '#f0ebe9';
            }}
          >
            Try Again
          </button>
          
          <Link
            to="/"
            className="flex-1 py-3 rounded-xl font-bold text-center transition-colors duration-200"
            style={{ 
              backgroundColor: '#567C8D',
              color: '#f0ebe9'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2F4156';
              e.target.style.color = '#d6d6d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#567C8D';
              e.target.style.color = '#f0ebe9';
            }}
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPopup;