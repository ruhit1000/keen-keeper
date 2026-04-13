import React from 'react';

const ButtonPrimary = ({ children }) => {
    return (
        <button className='btn bg-[#244D3F] text-base-100 rounded-md'>
            {children}
        </button>
    );
};

export default ButtonPrimary;