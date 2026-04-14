'use client';
import { CheckInContext } from '@/context/check-in.context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieChartDiv = () => {

    const { checkIns } = useContext(CheckInContext);
    const call = checkIns.filter((checkIn) => checkIn.type === 'Call').length;
    const text = checkIns.filter((checkIn) => checkIn.type === 'Text').length;
    const video = checkIns.filter((checkIn) => checkIn.type === 'Video').length;

    if (call === 0 && text === 0 && video === 0) {
        return (
            <div className='flex flex-col items-center justify-center mt-8 gap-4'>
                <p className='text-lg font-semibold'>No data to display</p>
            </div>
        );
    }


    const data = [
        { name: 'Call', value: call, fill: '#4A90E2' },
        { name: 'Text', value: text, fill: '#50C878' },
        { name: 'Video', value: video, fill: '#FFD700' }
    ];

    return (
        <div className='flex justify-center items-center mt-8'>
            <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PieChartDiv;