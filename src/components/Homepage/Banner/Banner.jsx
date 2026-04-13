import ButtonPrimary from '@/components/Buttons/ButtonPrimary';
import React from 'react';
import { IoAdd } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='text-center mt-20 mb-10 w-[95%] lg:container mx-auto'>
            <h1 className='text-5xl font-bold text-[#1F2937] mb-4'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden sm:block' />
                relationships that matter most.</p>
            <ButtonPrimary><IoAdd size={20} /> Add a Friend</ButtonPrimary>
        </div>
    );
};

export default Banner;