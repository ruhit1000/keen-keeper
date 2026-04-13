import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#244D3F] text-white px-4">
            <h1 className="text-9xl font-extrabold tracking-widest drop-shadow-lg">
                404
            </h1>
            <div className="bg-white text-[#244D3F] px-2 text-sm rounded rotate-12 absolute mb-24 font-semibold shadow-sm">
                Page Not Found
            </div>

            <p className="mt-8 mb-8 text-center text-lg text-gray-200 max-w-md">
                Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable.
            </p>
            <Link className="px-8 py-3 bg-white text-[#244D3F] font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out" href="/">
                Return Home
            </Link>
        </div>
    );
};

export default PageNotFound;