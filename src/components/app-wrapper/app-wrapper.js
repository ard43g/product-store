import React, { useEffect } from "react";
import "./app-wrapper.scss";

import { connect } from "react-redux";

import { onInitializedApp, onCloseServiceError } from "../../actions";
import { initApp, errorService, errorMessageService, appError } from "../../selectors/main-selector";

import App from "../app";
import Spinner from "../spinner";
import Error from "../error";

const AppWrapper = ({ serviceError, initialized, errorApp, ...props }) => {
    useEffect(() => {
        props.onInitializedApp();
    }, [initialized]);

    if (errorApp) {
        return <Error critical />;
    }
    return (
        <div className="app">
            {serviceError && (
                <Error
                    status={props.serviceErrorMessage.status}
                    text={props.serviceErrorMessage.statusText}
                    onCloseServiceError={props.onCloseServiceError}
                />
            )}
            {!serviceError && !initialized && <Spinner size="large" />}

            {initialized && <App />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        initialized: initApp(state),
        serviceError: errorService(state),
        serviceErrorMessage: errorMessageService(state),
        errorApp: appError(state),
    };
};

const mapDispatchToProps = {
    onInitializedApp,
    onCloseServiceError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
