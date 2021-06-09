import React from "react";
import "./form-field.scss";

const FormField = ({ input, label, type, meta: { touched, error }, placeholder, ...props }) => {
    const errorField = touched && error;
    const nameClass = type;
    return (
        <div className={`form__field form__field_${nameClass}`}>
            <input
                {...input}
                type={type}
                placeholder={placeholder}
                className={`form__input form__input_${nameClass} ${errorField ? "_error" : ""} `}
            ></input>
            {label && (
                <label className="order__label" htmlFor={props.name}>
                    Перезвоните мне
                </label>
            )}
            {type !== "checkbox" && <div className="form__field_error"> {errorField ? error : ""}</div>}
        </div>
    );
};

export default FormField;
