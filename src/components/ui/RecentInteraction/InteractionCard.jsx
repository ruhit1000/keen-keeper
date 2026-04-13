'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdAddCall, MdOutlineMessage } from 'react-icons/md';

const reasons = [
    "Asked for career advice",
    "Industry conference meetup",
    "Followed up on a job referral",
    "Discussed potential collaboration on a side project",
    "Shared an interesting tech article or resource",
    "Casual catch-up coffee chat",
    "Requested feedback on a recent project",
    "Invited to a networking event or hackathon",
    "Congratulated on a new job or promotion",
    "Coordinated a study session for new technologies"
];

const InteractionCard = ({ checkIn, name }) => {
    const [count, setCount] = useState(() => Math.floor(Math.random() * reasons.length));

    const { type, friendName, date } = checkIn;

    return (
        <div className='flex gap-3 items-center border-b border-base-300 py-4'>
            <div>
                {
                    type === 'Call' && <MdAddCall size={30} />
                }
                {
                    type === 'Text' && <MdOutlineMessage size={30} />
                }
                {
                    type === 'Video' && <IoVideocamOutline size={30} />
                }
            </div>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h4 className='text-lg'>{type}</h4>
                    <p className='text-[#64748B]'>{reasons[count]}</p>
                </div>
                <div>
                    <p className='text-sm text-[#64748B]'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default InteractionCard;