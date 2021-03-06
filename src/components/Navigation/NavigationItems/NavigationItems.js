import React from "react";
import "./NavigationItems.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>
            BurgerBuilder
        </NavigationItem>
        <NavigationItem link="/">Final</NavigationItem>
    </ul>
);

export default navigationItems;
