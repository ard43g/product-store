import React from "react";
import "./modal.scss";

const Modal = ({ type, isClose, onCloseServiceError, message }) => {
    const modalError = (
        <div className="error error__service">
            <div className="error__service_block ">
                {isClose && (
                    <div className="cart__close" onClick={onCloseServiceError}>
                        <span>X</span>
                    </div>
                )}
                <div className="modal__message">{message} </div>
            </div>
        </div>
    );

    const modalDone = (
        <div className="modal__wrapper">
            <div className="modal__block ">
                <div className="modal__message"> {message} </div>
            </div>
        </div>
    );

    const ShowModal = type === "done" ? modalDone : modalError;
    return ShowModal;
};

export default Modal;
