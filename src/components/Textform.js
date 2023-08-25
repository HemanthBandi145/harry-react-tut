
import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter the text here....");
  const handleOnClick = () =>{
    setText(text.toUpperCase());
  }
  const handleOnChange = (event) =>{
    console.log("On change count")
    setText(event.target.value);
  }
  return (
    <div>
      
      <div className="mb-3" >
        <label htmlFor="OpArea" className="form-label">
        <h3>{props.heading}</h3>
        </label>
        <textarea
          value={text}
          className="form-control"
          id="OpArea"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button className='btn btn-primary mt-3' type='submit' onClick={handleOnClick}>Convert to Uppercase</button>
      </div>
    </div>
  );
}
