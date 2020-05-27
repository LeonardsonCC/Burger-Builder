import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliar";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {igKey}
                        </span>
                        :{this.props.ingredients[igKey]}
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3>Seu pedido</h3>
                <p>Um delicioso hambúrguer com os ingredientes a seguir:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Preço Total: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continuar com o pedido?</p>
                <div style={{ textAlign: "right" }}>
                    <Button
                        type="Danger"
                        clicked={this.props.purchaseCancelled}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="Success"
                        clicked={this.props.purchaseContinue}
                    >
                        Continuar
                    </Button>
                </div>
            </Aux>
        );
    }
}

export default OrderSummary;
