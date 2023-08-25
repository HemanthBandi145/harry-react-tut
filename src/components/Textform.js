
import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnUpClick = () =>{
    setText(text.toUpperCase());
  }
  const handleOnLoClick = () =>{
    setText(text.toLowerCase());
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  return (
    <div>
      
      <div className="container mb-3" >
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
        <button className='btn btn-primary my-3' type='submit' onClick={handleOnUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary m-3' type='submit' onClick={handleOnLoClick}>Convert to Lowercase</button>
      
      </div>
      <div className="container mb-3" >
        <h3><b>Text Summary: </b></h3>
        <b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters.
      </div>
    </div>
  );
}
