import React, {useState} from "react";

function TextField() {

    const [text, setText] = useState("");

    function changeHandler(e){
        console.log("change");
        setText(e.target.value);
    }

    function clickUCHandler(){
        let res = text;
        setText(res.toUpperCase())
    }

    function clickClearHandler(){
        setText("");
    }

  return (
    <>
      <div className="form-group">
      <h1>Enter your text below:</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange = {changeHandler} 
          rows="5"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={clickUCHandler}>Convert to Upper Case</button>
        <button className="btn btn-primary my-3 mx-3" onClick={clickClearHandler}>Clear</button>
      </div>
    </>
  );
}

export default TextField;
