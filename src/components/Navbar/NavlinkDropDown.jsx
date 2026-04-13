'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import Navlinks from './Navlinks';

const NavlinkDropDown = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className='relative'>
            <button onClick={handleClick}>
                {clicked ? <RxCross1 size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
            <ul className='absolute right-0 top-10 bg-base-100 shadow-md rounded-md p-2 z-10' style={{ display: clicked ? 'block' : 'none' }}>
                <Navlinks />
            </ul>
        </div>
    );
};

export default NavlinkDropDown;