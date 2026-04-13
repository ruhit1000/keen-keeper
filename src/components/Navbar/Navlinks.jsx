'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { GoHome } from "react-icons/go";
import { TfiStatsDown } from 'react-icons/tfi';

const Navlinks = () => {
    const pathname = usePathname();

    const links = [
        {
            name: 'Home',
            path: '/',
            icon: <GoHome size={20} />
        },
        {
            name: 'Timeline',
            path: '/timeline',
            icon: <CiClock2 size={20} />
        },
        {
            name: 'Stats',
            path: '/stats',
            icon: <TfiStatsDown size={20} />
        }
    ];

    return (
        <>
            {
                links.map((link, index) => (
                    <li key={index}>
                        <Link className={`btn ml-1 ${pathname === link.path ? 'bg-[#244D3F] text-base-100 rounded-md' : 'btn-ghost text-[#64748B]'}`} href={link.path}>
                            {link.icon}
                            {link.name}
                        </Link>
                    </li>
                ))
            }
        </>
    );
};

export default Navlinks;