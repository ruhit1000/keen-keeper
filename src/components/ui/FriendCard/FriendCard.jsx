import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    const {
        id,
        name,
        picture,
        days_since_contact,
        tags,
        status
    } = friend;

    return (
        <Link href={`/friend/${id}`}>
            <div className='bg-base-100 shadow-lg rounded-lg p-6 text-center'>
                <Image
                    src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className='mx-auto rounded-full mb-3'
                />
                <h4 className='font-semibold text-xl mb-2'>{name}</h4>
                <p className='text-sm text-[#64748B] mb-2'>{days_since_contact}d ago</p>
                <div className='flex gap-2 justify-center mb-4'>
                    {
                        tags.map((tag, index) => (
                            <div className='py-2 px-3 bg-[#CBFADB] rounded-full' key={index}>
                                <p className='text-xs font-medium text-[#244D3F]'>{tag.toUpperCase()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={`py-2 px-3 rounded-full w-fit mx-auto 
                ${status === 'Overdue' && 'bg-[#EFAD44]'}
                ${status === 'Almost Due' && 'bg-[#EF4444]'}
                ${status === 'On-Track' && 'bg-[#244D3F]'}
                `}>
                    <p className='text-xs font-medium text-base-100'>{status}</p>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;