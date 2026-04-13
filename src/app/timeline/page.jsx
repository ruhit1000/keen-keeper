import AllTimeline from '@/components/timelinePage/AllTimeline';
import React, { useContext } from 'react';

const TimelinePage = () => {

    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className='w-[95%] lg:container mx-auto'>
                <h2 className='font-bold text-5xl'>Timeline</h2>
                <div>
                    <AllTimeline />
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;