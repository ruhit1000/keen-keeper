'use client';
import { CheckInContext } from '@/context/check-in.context';
import React, { useContext } from 'react';
import TimelineCard from './TimelineCard';

const AllTimeline = () => {

    const { checkIns } = useContext(CheckInContext);

    return (
        <div className='my-4'>
            {
                checkIns.reverse().map((checkIn) => <TimelineCard key={checkIn.id} checkIn={checkIn} />)
            }
        </div>
    );
};

export default AllTimeline;