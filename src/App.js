import React, { useState } from 'react';
import './App.css';


function LabeledSlider({ label }){
  const [value, setValue] = useState(0);

  return (
    <div>
        <div className="color-label">{label}:</div>
        <input type="range" 
        min="0" 
        max="255"
        value={value}
        onChange={(event)=>{setValue(event.target.value)}} 
        />
        <span>{value}</span>
      </div>
  );
}

function ColorPicker() {
  return (
    <div className="color-picker">
    <div className="color-swatch"></div>
    <LabeledSlider label="red"/>
    <LabeledSlider label="green"/>
    <LabeledSlider label="blue"/>
    </div>
  );
}

// function Message({ action }){

//   return (
//     <div>Don't {action}!</div>
//   );

// }


function App() {

  return (
    <ColorPicker />
  );
}

export default App;
