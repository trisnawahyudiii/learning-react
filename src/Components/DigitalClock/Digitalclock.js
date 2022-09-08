import React, { useState } from 'react';
import './Digitalclock.css';

const Digitalclock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    };

    setInterval(tick, 1000);

    return (
        <div className="clock-container">
            <h1>Digital CLock</h1>
            <div className="gray-container time-container">
                <h3>Current Time :</h3>
                <h3> {time} </h3>
            </div>
        </div>
    );
};

export default Digitalclock;
