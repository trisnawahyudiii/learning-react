import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case '+':
            break;

        default:
            break;
    }
};

const Calculator = () => {
    const [state, dispacth] = useReducer(dispacth, { num1: 0, num2: 0, operator: '' });
    
    return (
        <div className="calculator-container">
            <h1>Simple Calculator</h1>
        </div>
    );
};

export default Calculator;
