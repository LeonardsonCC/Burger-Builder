import React from "react";
import PropTypes from "prop-types";
import "./Backdrop.css";

const backdrop = (props) =>
    props.show ? (
        <div className="Backdrop" onClick={props.clicked}></div>
    ) : null;

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired,
};

export default backdrop;
