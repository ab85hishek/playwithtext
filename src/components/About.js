import React from "react";

function About(props) {
  let myStyle = props.mode === "dark" ? { color: "white" } : { color: "black" };

  return (
    <>
      <div className="container">
        <div style={myStyle}>
          <h1>About Us</h1>
          <p>
            Play With Text gives you a way to analyze your text quickly and
            efficiently. Be it word count, charcter count, time to read,
            converting to uppercase and lowercase, copy your text to clipboard
            or removing extra spaces. Play With Text is a free tool which is
            fully suitable for writing texts with character/word limit. It suits
            to counter characters in blogs, books, pdf, excel documens, etc.
            This word counter web app works in any browser such as chrome,
            firefox, safari, opera, etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
