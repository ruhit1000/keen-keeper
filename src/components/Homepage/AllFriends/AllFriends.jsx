import React from 'react';
import friendsData from '@/assets/friendsData.json'
import FriendCard from '@/components/ui/FriendCard/FriendCard';

const AllFriends = () => {
    
    return (
        <div className='w-[95%] lg:container mx-auto mb-20'>
            <h3 className='font-semibold text-2xl mb-4'>Your Friends</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    friendsData.map((friend) => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default AllFriends;