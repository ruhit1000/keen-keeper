import React from 'react';
import { ClimbingBoxLoader, DotLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent">
            <div className="w-15 h-15 rounded-full border-8 border-[#244D3F]/10 border-t-[#244D3F] animate-spin">
            </div>
        </div>
    );
};

export default LoadingPage;