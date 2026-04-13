'use client';
import React, { createContext, useState } from 'react';

export const CheckInContext = createContext();

const CheckInProvider = ({ children }) => {
    const [checkIns, setCheckIns] = useState([]);

    const data = {
        checkIns,
        setCheckIns
    }

    return (
        <CheckInContext.Provider value={data}>
            {children}
        </CheckInContext.Provider>
    );
};

export default CheckInProvider;