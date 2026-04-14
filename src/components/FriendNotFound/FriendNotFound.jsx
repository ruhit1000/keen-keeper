import Link from 'next/link';
import React from 'react';

const FriendNotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
            <div className="bg-white text-center p-12 rounded-3xl shadow-2xl max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#244D3F] mb-6 leading-tight">
                    Friend Not Found
                </h2>

                <p className="text-[#64748B] text-xl mb-10 max-w-lg mx-auto">
                    Oops! We could not locate the friend profile you are looking for. The link might be broken, or the profile may no longer exist.
                </p>

                <Link href="/"
                    className="inline-block px-10 py-4 bg-[#244D3F] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#1a3a2f] hover:scale-105 transition-all duration-300 ease-in-out">
                    Return to homepage
                </Link>
            </div>
        </div>
    );
};

export default FriendNotFoundPage;