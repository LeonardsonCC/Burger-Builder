import React from "react";

import Aux from "../../../hoc/Auxiliar";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Seu pedido</h3>
            <p>Um delicioso hambúrguer com os ingredientes a seguir:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Preço Total: {props.price.toFixed(2)}</strong>
            </p>
            <p>Continuar com o pedido?</p>
            <div style={{ textAlign: "right" }}>
                <Button type="Danger" clicked={props.purchaseCancelled}>
                    Cancelar
                </Button>
                <Button type="Success" clicked={props.purchaseContinue}>
                    Continuar
                </Button>
            </div>
        </Aux>
    );
};

export default orderSummary;
