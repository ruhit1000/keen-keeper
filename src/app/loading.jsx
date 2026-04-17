import React from 'react';
import { ClimbingBoxLoader, DotLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingPage;