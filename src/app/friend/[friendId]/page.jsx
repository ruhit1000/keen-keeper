import React from 'react';
import friendsData from '@/assets/friendsData.json';
import Image from 'next/image';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { MdOutlineArchive } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import CheckInButtons from '@/components/ui/CheckInButtons/CheckInButtons';
import RecentInterection from '@/components/ui/RecentInteraction/RecentInterection';

const CurrentFriendPage = async ({ params }) => {
    const { friendId } = await params;
    const friend = friendsData.find(friend => friend.id === parseInt(friendId));

    const {
        id,
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date
    } = friend;

    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-[95%] lg:container mx-auto'>
                {/* left side */}
                <div className='col-span-1'>
                    <div className='p-6 bg-base-100 shadow-lg rounded-2xl text-center'>
                        <Image
                            src={picture}
                            alt={name}
                            width={100}
                            height={100}
                            className='mx-auto rounded-full mb-3'
                        />
                        <h3 className='text-xl font-bold mb-2'>{name}</h3>
                        <div className={`py-2 px-3 rounded-full w-fit mx-auto mb-2 
                        ${status === 'Overdue' && 'bg-[#EFAD44]'}
                        ${status === 'Almost Due' && 'bg-[#EF4444]'}
                        ${status === 'On-Track' && 'bg-[#244D3F]'}
                        `}>
                            <p className='text-xs font-medium text-base-100'>{status}</p>
                        </div>
                        <div className='flex gap-2 justify-center mb-4'>
                            {
                                tags.map((tag, index) => (
                                    <div className='py-2 px-3 bg-[#CBFADB] rounded-full' key={index}>
                                        <p className='text-xs font-medium text-[#244D3F]'>{tag.toUpperCase()}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <p className='text-sm font-medium text-gray-600 mb-3'><i>&quot;{bio}&quot;</i></p>
                        <p className='text-[#64748B] text-sm'>{email}</p>
                    </div>
                    <div className='mt-4 space-y-3'>
                        <button className='bg-base-100 border border-base-300 rounded shadow-md w-full font-medium p-4 hover:bg-base-200 cursor-pointer flex items-center justify-center gap-2'><RiNotificationSnoozeLine size={20} /> Snooze 2 weeks</button>
                        <button className='bg-base-100 border border-base-300 rounded shadow-md w-full font-medium p-4 hover:bg-base-200 cursor-pointer flex items-center justify-center gap-2'><MdOutlineArchive size={20} /> Archive</button>
                        <button className='bg-base-100 border border-base-300 rounded shadow-md w-full font-medium p-4 hover:bg-base-200 cursor-pointer flex items-center justify-center gap-2 text-red-600'><FaRegTrashAlt size={20} /> Delete</button>
                    </div>
                </div>
                {/* Right side */}
                <div className='md:col-span-2 space-y-6'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='text-center py-8 px-4 bg-base-100 shadow-lg rounded-2xl  flex items-center justify-center'>
                            <div>
                                <h3 className='font-semibold text-3xl text-[#244D3F]'>{days_since_contact}</h3>
                                <p className='text-[#64748B] text-lg'>Days Since Contact</p>
                            </div>
                        </div>
                        <div className='text-center py-8 px-4 bg-base-100 shadow-lg rounded-2xl flex items-center justify-center'>
                            <div>
                                <h3 className='font-semibold text-3xl text-[#244D3F]'>{goal}</h3>
                                <p className='text-[#64748B] text-lg'>Goal (Days)</p>
                            </div>
                        </div>
                        <div className='text-center py-8 px-4 bg-base-100 shadow-lg rounded-2xl flex items-center justify-center'>
                            <div>
                                <h3 className='font-semibold text-3xl text-[#244D3F]'>
                                    {new Date(next_due_date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        timeZone: 'UTC'
                                    })}
                                </h3>
                                <p className='text-[#64748B] text-lg'>Next Due Date</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between bg-base-100 p-6 border border-base-300 shadow-lg rounded-2xl'>
                        <div>
                            <h3 className='font-medium text-xl text-[#244D3F] mb-4'>Relationship Goal</h3>
                            <p className='text-[#64748B] text-lg'>Connect every <span className='font-bold text-[#1F2937]'>{goal} days</span></p>
                        </div>
                        <button className='btn btn-soft'>Edit</button>
                    </div>
                    <div className='bg-base-100 p-6 border border-base-300 shadow-lg rounded-2xl'>
                        <h3 className='font-medium text-xl text-[#244D3F] mb-4'>Quick Check-In</h3>
                        <CheckInButtons name={name} />
                    </div>
                    <RecentInterection name={name} />
                </div>
            </div>
        </div>
    );
};

export default CurrentFriendPage;