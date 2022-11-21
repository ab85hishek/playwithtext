import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {

  function btn1(){
    props.showTheme("#ff2121");
  }
  function btn2(){
    props.showTheme("#1A2F4C");
  }
  function btn3(){
    props.showTheme("#1b1a4c");
  }
  function btn4(){
    props.showTheme("#F9F7F7");
  }


  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>

            {/* button for theme */}
            <div>
            <button style={{borderRadius: "20px",
            height: "40px",
            backgroundColor: "#ff2121"}} onClick={btn1}></button>
            <button className="mx-3" style={{borderRadius: "20px",
            height: "40px",
            backgroundColor: "#1A2F4C"}} onClick={btn2}></button>
            <button style={{borderRadius: "20px",
            height: "40px",
            backgroundColor: "#1b1a4c"}} onClick={btn3}></button>
            <button className="mx-3" style={{borderRadius: "20px",
            height: "40px",
            backgroundColor: "#F9F7F7"}} onClick={btn4}></button>
           
            </div>
            {/* button for dark mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode === "light" ? "Dark" : "Light"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title first",
  about: "About Us",
};

export default Navbar;
