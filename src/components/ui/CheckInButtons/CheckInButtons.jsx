import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdAddIcCall, MdOutlineMessage } from 'react-icons/md';

const CheckInButtons = () => {
    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            <button className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <MdAddIcCall size={30} />
                Call
            </button>
            <button className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <MdOutlineMessage size={30} />
                Text
            </button>
            <button className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <IoVideocamOutline size={30} />
                Video
            </button>
        </div>
    );
};

export default CheckInButtons;