import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

import Aux from "../../../hoc/Auxiliar/Auxiliar";
import Backdrop from "../Backdrop/Backdrop";

function modal(props) {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className="Modal"
                style={{
                    transform: props.show
                        ? "translateY(0)"
                        : "translateY(-100vh)",
                    opacity: props.show ? "1" : "0",
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
}

modal.propTypes = {
    show: PropTypes.bool,
    modalClosed: PropTypes.func.isRequired,
};

const shouldComponentNotUpdate = (prevProps, props) => {
    if (props.show) {
        return prevProps.children === props.children;
    }
    return prevProps.show === props.show;
};

export default React.memo(modal, shouldComponentNotUpdate);
