import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

import Aux from "../../../hoc/Auxiliar";
import Backdrop from "../Backdrop/Backdrop";

function Modal(props) {
    console.log("[modal] update");
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

Modal.propTypes = {
    show: PropTypes.bool,
    modalClosed: PropTypes.func.isRequired,
};

const shouldComponentUpdate = (prevProps, props) =>
    prevProps.show === props.show;

export default React.memo(Modal, shouldComponentUpdate);
