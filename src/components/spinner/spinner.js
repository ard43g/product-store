import React from "react";
import "./spinner.scss";

const Spinner = ({ size }) => {
    const spinnerLarge = (
        <div className="loadingio-spinner-spin-lleuc40854p">
            <div className="ldio-scbgiavrndk">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );

    const spinnerSmall = (
        <div className="loadingio-spinner-spin-dqfcwt8bn1">
            <div className="ldio-yfe021g5ij">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );

    const viewSpinner = (size) => {
        switch (size) {
            case "large":
                return spinnerLarge;
            case "small":
                return spinnerSmall;
            default:
                return size;
        }
    };
    const activeSpinner = size ? viewSpinner(size) : "Загрузка...";

    return (
        <div className={`spinner spinner__wrapper_${size ? size : ""}`}>
            <div className="spinner__block">
                <div className="spinner__initialize">{activeSpinner}</div>
            </div>
        </div>
    );
};

export default Spinner;
