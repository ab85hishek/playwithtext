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
        props.showAlert("Converted to uppercase","Succcess!")
    }
    function clickLCHandler() {
        let res = text;
        setText(res.toLowerCase());
        props.showAlert("Converted to lowercase","Succcess!")
    }

    function clickClearHandler() {
        setText("");
        props.showAlert("Cleared text","Succcess!")

    }

    function clickCopyHandler(){
        navigator.clipboard.writeText(text).then(() => {
            console.log('Content copied to clipboard');
            
          },() => {
            console.error('Failed to copy');
            
          });
        props.showAlert("Copied to clipboard","Succcess!")

    }

    function clickESHandler(){
        let res = text.replace(/\s+/g," ").trim();
        setText(res);
        // console.log("removed");
        props.showAlert("Extra space cleared","Succcess!")

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
                <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={clickUCHandler}>
                    Convert to Upper Case
                </button>
                <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={clickLCHandler}>
                    Convert to Lower Case
                </button>
                <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={clickCopyHandler}>
                    Copy to clipboard
                </button>
                <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={clickESHandler}>
                    Remove extra spaces
                </button>
                <button disabled={text.length === 0}
                    className="btn btn-primary my-3 "
                    onClick={clickClearHandler}
                > Clear
                </button>
            </div>
            <div className="container" style={{color: (props.mode==='light')?'black':'white'}}>
                <h3>Summary of your input: </h3>
                <li>Word count : {
                    text.split(" ").filter((element => {
                        return (element !=="");
                    })).length}</li>
                <li>Character count : {text.length}</li>
                <li>Estimated time to read : {(0.008 * 
                    text.split(" ").filter((element => {
                        return (element !=="");
                    })).length).toFixed(2)} min</li>
                <h3 className="my-3">Preview</h3>
                <p align="justify">{(text.length)? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}

export default TextField;
