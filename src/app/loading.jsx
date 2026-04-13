import React from 'react';

const LoadingPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Full viewport height
            backgroundColor: 'transparent' // Adjust if you want a full-page overlay
        }}>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
            <div style={{
                border: '8px solid rgba(36, 77, 63, 0.1)', // Light version of #244D3F for the track
                borderTop: '8px solid #244D3F', // The actual color for the spinning part
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                animation: 'spin 1.5s linear infinite'
            }}>
            </div>
        </div>
    );
};

export default LoadingPage;