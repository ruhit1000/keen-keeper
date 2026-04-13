import Link from 'next/link';
import React from 'react';
import Navlinks from './Navlinks';
import NavlinkDropDown from './NavlinkDropDown';

const Navbar = () => {

    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar px-6'>
                <div className="flex-1">
                    <Link className='font-bold text-2xl' href="/">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </Link>
                </div>
                <div className="flex-none hidden sm:block">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        <Navlinks />
                    </ul>
                </div>
                <div className='flex-none sm:hidden'>
                    <NavlinkDropDown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;