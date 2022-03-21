import React from 'react';

function SayiliButon(props) {
  return (
    <button 
        style={{ color: props.deger % 2 == 0 ? "blue" : "red" }} 
        onClick={() => props.degerDegisti(props.indeks, props.deger + 1)}>
        {props.deger}
    </button>
  );
}

export default SayiliButon;