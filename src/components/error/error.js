import React from "react";
import "./error.scss";
import Modal from "../modal/modal";

const Error = ({ status, text, onCloseServiceError, critical }) => {
    if (critical) {
        return (
            <div className="error error__app">
                Произошла ошибка. Возможно проблемы с сервером. Перезагрузите приложение или попробуйте позже
            </div>
        );
    }

    const errorMessage = `Ошибка сервера код ${status} : ${text}`;

    return <Modal type="error" isClose onCloseServiceError={onCloseServiceError} message={errorMessage} />;
};

export default Error;
