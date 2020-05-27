import React from "react";
import "./Logo.css";

import burgerLogo from "../../assets/images/burger-logo.png";

const logo = (props) => (
    <div className="Logo" style={{ height: props.height, ...props.style }}>
        <img src={burgerLogo} alt="BurgerBuilder Logo" />
    </div>
);

export default logo;
