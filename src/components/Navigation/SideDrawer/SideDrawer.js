import React from "react";
import "./SideDrawer.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliar/Auxiliar";

const sideDrawer = (props) => {
    const attachedClasses = `SideDrawer ${props.open ? "Open" : "Close"}`;
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses}>
                <Logo height="11%" style={{ marginBottom: "32px" }} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
