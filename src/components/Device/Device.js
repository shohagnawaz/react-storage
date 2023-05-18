import React from 'react';
import DeviceDe from '../DeviceDe/DeviceDe';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDe price={props.price}></DeviceDe>
        </div>
    );
};

export default Device;