export const requiredField = (value) => (value ? undefined : "Поле обязательно для ввода");

export const maxLengthField = (max) => (value) =>
    value && value.length > max ? `Максимальное количество символов : ${max}` : undefined;

export const minLengthField = (min) => (value) =>
    value && value.length < min ? `Мимимальное количество символов : ${min}` : undefined;

export const nameField = (value) => (!/^\D/gi.test(value) ? "Первый символ должен быть буквой" : undefined);

export const phoneField = (value) =>
    value && isNaN(Number(value)) ? "Только цифры без символов и пробелов" : undefined;
