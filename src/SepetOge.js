import React from 'react';
import './SepetOge.css';

function SepetOge(props) {
    
    return (
        <div className="SepetOge">
            <input type="text" value={props.adet} size="2" readOnly />
            <button onClick={() => props.adetDegisti(props.indeks, -1)}>-</button>
            <button onClick={() => props.adetDegisti(props.indeks, +1)}>+</button>
            {props.ad}
        </div>
    );
}

export default SepetOge;