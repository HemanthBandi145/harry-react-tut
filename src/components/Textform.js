import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyOnClick = () =>{
    console.log("Copy is clicked");
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard!");
  }
  return (
    <div>
      <div className="container mb-3">
        <label htmlFor="OpArea" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <div className="input-group">
          <textarea
            value={text}
            className="form-control"
            id="OpArea"
            rows="8" 
            onChange={handleOnChange}

          ></textarea>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2 mx-1" viewBox="0 0 16 16" onClick={handleCopyOnClick}>
  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
</svg>
        </div>  
        
        <button
          className="btn btn-primary my-3"
          type="submit"
          onClick={handleOnUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary m-3"
          type="submit"
          onClick={handleOnLoClick}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="container mb-3">
        <h3>
          <b>Text Summary: </b>
        </h3>
        <b>{text.split(" ").length}</b> Words and <b>{text.length}</b>{" "}
        Characters.
      </div>
    </div>
  );
}
