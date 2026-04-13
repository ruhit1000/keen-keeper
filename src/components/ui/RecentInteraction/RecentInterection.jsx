'use client';
import { CheckInContext } from '@/context/check-in.context';
import React, { useContext } from 'react';
import { FaHistory } from 'react-icons/fa';
import InteractionCard from './InteractionCard';
import Link from 'next/link';

const RecentInterection = ({ name }) => {

    const { checkIns } = useContext(CheckInContext);

    const userCheckIns = checkIns.filter(checkIn => checkIn.friendName === name);
    const recentCheckIns = userCheckIns.slice(-4).reverse();

    return (
        <div className='bg-base-100 p-6 border border-base-300 shadow-lg rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='font-medium text-xl text-[#244D3F] mb-4'>Recent Interactions</h3>
                <Link href={'/timeline'}>
                    <button className='btn btn-soft'><FaHistory /> Full History</button>
                </Link>
            </div>
            <div>
                {
                    recentCheckIns.map((checkIn) => <InteractionCard
                        key={checkIn.id}
                        checkIn={checkIn}
                        name={name}
                    />)
                }
            </div>
        </div>
    );
};

export default RecentInterection;