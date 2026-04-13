import React from 'react';
import textIcon from '@/assets/text.png';
import callIcon from '@/assets/call.png';
import videoIcon from '@/assets/video.png';
import Image from 'next/image';

const TimelineCard = ({ checkIn }) => {
    const { type, friendName, date } = checkIn;
    return (
        <div className='flex gap-5 p-4 bg-white rounded-lg shadow-md mb-4 items-center'>
            <div>
                <Image 
                    src={type === 'Text' ? textIcon : type === 'Call' ? callIcon : videoIcon}
                    alt={type}
                    width={40}
                    height={40}
                />
            </div>
            <div>
                <h3 className='text-[#64748B] text-lg'><span className='font-medium text-xl text-[#244D3F]'>{type}</span> with {friendName}</h3>
                <p className='text-[#64748B] font-medium'>{date}</p>
            </div>
        </div>
    );
};

export default TimelineCard;