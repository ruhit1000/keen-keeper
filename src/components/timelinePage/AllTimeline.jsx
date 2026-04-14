'use client';
import { CheckInContext } from '@/context/check-in.context';
import React, { useContext, useMemo, useState } from 'react';
import TimelineCard from './TimelineCard';

const AllTimeline = () => {

    const { checkIns } = useContext(CheckInContext);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortBy, setSortBy] = useState('default');

    const displayedFriends = useMemo(() => {
        if (!checkIns) return [];
        let result = [...checkIns];

        if (searchQuery) {
            result = result.filter((checkIn) => checkIn.friendName?.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        if (filterStatus !== 'All') {
            result = result.filter((checkIn) => checkIn.type === filterStatus);
        }

        if (sortBy === 'newest') {
            result = result.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'oldest') {
            result = result.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        return result;
    }, [checkIns, searchQuery, filterStatus, sortBy]);

    return (
        <div>
            <div className='my-4 flex items-center justify-between'>
                <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by name" className="input" />
                <div className='flex gap-2'>
                    <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="select w-40"
                    >
                        <option value="All">All Types</option>
                        <option value="Text">Text</option>
                        <option value="Call">Call</option>
                        <option value="Video">Video</option>
                    </select>
                    <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select w-40"
                    >
                        <option value="default" disabled={true}>Sort Timeline</option>
                        <option value="newest">Date (Newest First)</option>
                        <option value="oldest">Date (Oldest First)</option>
                    </select>
                </div>
            </div>
            <div className='my-4'>
                {   displayedFriends.length === 0 ? (
                    <p className='text-center bg-base-100 p-6 border border-base-300 rounded-2xl text-gray-500'>No data found.</p>
                ) :
                    displayedFriends.map((checkIn) => <TimelineCard key={checkIn.id} checkIn={checkIn} />)
                }
            </div>
        </div>
    );
};

export default AllTimeline;