import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const ColorLabel = styled.div`
  display: inline-block;
  width: 50px;
  text-align: left;
`;

function LabeledSlider({ label, value, setValue }) {
  return (
    <div>
      <ColorLabel>{label}:</ColorLabel>
      <input type="range" 
         min="0"
         max="255"
         value={value}
         onChange={(event)=>{setValue(parseInt(event.target.value,10))}}/>
      <span>{value}</span>
      </div>
  );
}

LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};


const ColorSwatch = styled.div`
  width:100px; 
  height:100px; 
  border:1px solid black;
`;

function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = {background: `rgb(${red}, ${green}, ${blue})`};
  return (
    <div className="color-picker">
      <ColorSwatch style={color} />
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
