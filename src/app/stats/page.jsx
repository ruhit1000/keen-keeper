import PieChartDiv from '@/components/Stats/PieChartDiv';
import React from 'react';

const StatPage = () => {
    return (
        <div className='py-20 bg-[#F8FAFC]'>
            <div className='w-[95%] lg:container mx-auto'>
                <h1 className='font-bold text-5xl text-[#1F2937] mb-6'>Friendship Analytics</h1>
                <div className='p-8 bg-base-100 border border-gray-200 rounded-lg shadow-md'>
                    <p className='font-medium text-xl text-[#244D3F]'>By Interaction Type</p>
                    <PieChartDiv />
                </div>
            </div>
        </div>
    );
};

export default StatPage;