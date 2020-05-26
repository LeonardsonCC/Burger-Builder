import React from "react";
import "./Layout.css";

import Aux from "../../hoc/Auxiliar";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">{props.children}</main>
    </Aux>
);

export default layout;
