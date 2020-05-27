import React, { useEffect, useState } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliar/Auxiliar";

const withErrorHander = (WrappedComponent, axios) => {
    return (props) => {
        const [error, setError] = useState(null);

        useEffect(() => {
            axios.interceptors.request.use((req) => {
                setError(null);
                return req;
            });
            axios.interceptors.response.use(
                (res) => res,
                (error) => {
                    setError(error.toJSON().message);
                }
            );
        }, []);

        const errorConfirmedHandler = () => {
            setError(null);
        };

        return (
            <Aux>
                <Modal show={!!error} modalClosed={errorConfirmedHandler}>
                    {error ? error : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHander;
