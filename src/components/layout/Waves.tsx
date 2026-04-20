import React from 'react';
import './styles/waves.css';

const Waves: React.FC = () => {
    return (
        <>
            <div className="wave-container">
                <div className="wave left"></div>
                <div className="wave right"></div>
            </div>
        </>
    );
};

export default Waves;
