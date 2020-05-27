import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const button = (props) => (
    <button onClick={props.clicked} className={`Button ${props.type}`}>
        {props.children}
    </button>
);

button.defaultProps = {
    type: "Success",
};
button.propTypes = {
    clicked: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default button;
