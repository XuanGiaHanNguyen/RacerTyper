import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from './LoadingAnimation'; // Assuming you have this in a separate file

const LoadingScreen = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/RacerTyper/game');
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAnimation />;
};

export default LoadingScreen;