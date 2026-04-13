import Link from 'next/link';
import React from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {

    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <Link className='font-bold text-2xl' href="/">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Navlinks />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;