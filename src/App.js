import React, { useState } from 'react';
import './App.css';


function LabeledSlider({ label, value, setValue }) {
  return (
    <div>
      <div className="color-label">{label}:</div>
      <input type="range" 
         min="0"
         max="255"
         value={value}
         onChange={(event)=>{setValue(event.target.value)}}/>
      <span>{value}</span>
      </div>
  );
}

function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = {background: `rgb(${red}, ${green}, ${blue})`};
  return (
    <div className="color-picker">
      <div className="color-swatch" style={color}></div>
      <LabeledSlider label="red"   value={red}   setValue={(value)=>{setRed(value)}}/>
      <LabeledSlider label="green" value={green} setValue={(value)=>{setGreen(value)}}/>
      <LabeledSlider label="blue"  value={blue}  setValue={(value)=>{setBlue(value)}}/>
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
