import React, { useEffect } from "react";
import "./order-form.scss";

import { Field, reduxForm } from "redux-form";
import { maxLengthField, minLengthField, phoneField, requiredField, nameField } from "../../validators/validators";
import FormField from "../form-field/form-field";
import Spinner from "../spinner";

const lengthMaxField11 = maxLengthField(11);
const lengthMinField11 = minLengthField(11);
let OrderForm = (props) => {
    const { handleSubmit, reset, submitting, valid, clearForm } = props;

    useEffect(() => {
        if (clearForm) {
            reset();
        }
    }, [clearForm]);

    return (
        <form className="order__form" onSubmit={handleSubmit}>
            <div className="order__field-wrapper">
                <Field
                    className="order__field"
                    name="firstName"
                    component={FormField}
                    type="text"
                    placeholder="Введите Ваше имя"
                    validate={[requiredField, nameField]}
                />
            </div>

            <div className="order__field-wrapper">
                <Field
                    name="tel"
                    component={FormField}
                    type="tel"
                    placeholder="Введите номер телефона"
                    validate={[requiredField, phoneField, lengthMaxField11, lengthMinField11]}
                />
            </div>

            <div className="order__field-wrapper">
                <Field name="call" id="call" component={FormField} type="checkbox" label="Перезвоните мне" />
            </div>

            <div className="order__submit ">
                {
                    <button className="order__submit-btn product__btn" disabled={!valid || submitting}>
                        Отправить
                    </button>
                }

                {submitting && <Spinner size="small" />}
            </div>
        </form>
    );
};

export default reduxForm({
    form: "order",
})(OrderForm);
