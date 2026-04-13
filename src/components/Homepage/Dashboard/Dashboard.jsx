import React from 'react';

const Dashboard = () => {
    return (
        <div className='w-[95%] lg:w-277.5 lg:container mx-auto grid grid-cols-2 sm:grid-cols-4 place-items-center gap-6 mb-10 border-b border-base-300 pb-10'>
            <div className='bg-base-100 py-8 border border-base-300 shadow-lg w-full max-w-65 flex items-center justify-center rounded-lg'>
                <div className='text-center'>
                    <h2 className='font-semibold text-3xl text-[#244D3F] mb-2'>10</h2>
                    <p className='text-[#64748B] text-lg'>Total Friends</p>
                </div>
            </div>
            <div className='bg-base-100 py-8 border border-base-300 shadow-lg w-full max-w-65 flex items-center justify-center rounded-lg'>
                <div className='text-center'>
                    <h2 className='font-semibold text-3xl text-[#244D3F] mb-2'>10</h2>
                    <p className='text-[#64748B] text-lg'>On Track</p>
                </div>
            </div>
            <div className='bg-base-100 py-8 border border-base-300 shadow-lg w-full max-w-65 flex items-center justify-center rounded-lg'>
                <div className='text-center'>
                    <h2 className='font-semibold text-3xl text-[#244D3F] mb-2'>10</h2>
                    <p className='text-[#64748B] text-lg'>Need Attention</p>
                </div>
            </div>
            <div className='bg-base-100 py-8 border border-base-300 shadow-lg w-full max-w-65 flex items-center justify-center rounded-lg'>
                <div className='text-center'>
                    <h2 className='font-semibold text-3xl text-[#244D3F] mb-2'>10</h2>
                    <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;