'use client';
import { CheckInContext } from '@/context/check-in.context';
import React, { useContext } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdAddIcCall, MdOutlineMessage } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

const CheckInButtons = ({ name }) => {

    const { checkIns, setCheckIns } = useContext(CheckInContext);

    const handleCheckIn = (type) => {
        const newCheckIn = {
            id: checkIns.length + 1,
            type,
            friendName: name,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: 'UTC'
            })
        };
        setCheckIns([...checkIns, newCheckIn]);
        toast.success(`${type} with ${name}!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            <button
                onClick={() => handleCheckIn('Call')}
                className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <MdAddIcCall size={30} />
                Call
            </button>
            <button
                onClick={() => handleCheckIn('Text')}
                className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <MdOutlineMessage size={30} />
                Text
            </button>
            <button
                onClick={() => handleCheckIn('Video')}
                className='p-4 border border-base-300 rounded-xl bg-[#F8FAFC] text-lg flex flex-col items-center justify-center gap-2 hover:bg-[#E2E8F0] cursor-pointer'>
                <IoVideocamOutline size={30} />
                Video
            </button>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </div>
    );
};

export default CheckInButtons;