import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
    const [count, setCount] = useState(0);

    const tambah = () => {
        setCount((previousCount) => previousCount + 1);
    };

    const kurang = () => {
        setCount((previousCount) => previousCount - 1);
    };

    return (
        <div className="counter">
            <h1>Simple react counter</h1>
            <div className="counter-container">
                <h1>Count : {count}</h1>
                <div className="counter-button">
                    <button onClick={tambah}>tambah</button>
                    <button onClick={kurang}>kurang</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
