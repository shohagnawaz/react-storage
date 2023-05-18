import React, { useState } from 'react';

const Watch = () => {

    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount)
    }

    return (
        <div>
            <h2>This is watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Click Me For Count</button>
        </div>
    );
};

export default Watch;