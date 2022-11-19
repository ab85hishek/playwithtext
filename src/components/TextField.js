import React, { useState } from "react";

function TextField(props) {
    const [text, setText] = useState("");

    function changeHandler(e) {
        // console.log("change");
        setText(e.target.value);
    }

    function clickUCHandler() {
        let res = text;
        setText(res.toUpperCase());
    }
    function clickLCHandler() {
        let res = text;
        setText(res.toLowerCase());
    }

    function clickClearHandler() {
        setText("");
    }

    function clickCopyHandler(){
        navigator.clipboard.writeText(text).then(() => {
            console.log('Content copied to clipboard');
            
          },() => {
            console.error('Failed to copy');
            
          });
    }

    function clickESHandler(){
        let res = text.replace(/\s+/g," ").trim();
        setText(res);
        // console.log("removed");
    }

    return (
        <>
            <div className="form-group" style={{color: (props.mode==='light')?'black':'white'}}>
                <h1>Enter your text below:</h1>
                <textarea 
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={changeHandler}
                    rows="5"
                    style={{backgroundColor: (props.mode==='light')?'white':'#3c316d',
                    color: (props.mode==='light')?'black':'white'}}
                ></textarea>
                <button className="btn btn-primary my-3" onClick={clickUCHandler}>
                    Convert to Upper Case
                </button>
                <button className="btn btn-primary my-3 mx-3" onClick={clickLCHandler}>
                    Convert to Lower Case
                </button>
                <button className="btn btn-primary my-3" onClick={clickCopyHandler}>
                    Copy to clipboard
                </button>
                <button className="btn btn-primary my-3 mx-3" onClick={clickESHandler}>
                    Remove extra spaces
                </button>
                <button
                    className="btn btn-primary my-3 "
                    onClick={clickClearHandler}
                > Clear
                </button>
            </div>
            <div className="container" style={{color: (props.mode==='light')?'black':'white'}}>
                <h3>Summary of your input: </h3>
                <li>Word count : {
                    (text.length ===0)? 0 :
                    text.split(" ").length}</li>
                <li>Character count : {text.length}</li>
                <h3 className="my-3">Preview</h3>
                <p align="justify">{(text.length)? text : "Enter text in above box to preview....."}</p>
            </div>
        </>
    );
}

export default TextField;
