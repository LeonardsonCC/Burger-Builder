import React from "react";
import "./Button.css";

const button = (props) => (
    <button onClick={props.clicked} className={`Button ${props.type}`}>
        {props.children}
    </button>
);

export default button;
