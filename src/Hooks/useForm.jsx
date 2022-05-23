import React from "react";

const types = {
  email: {
    regex:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
    msg: "Digite um E-mail valido!",
  },
  password: {
    regex: /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/,
    msg: "A senha deve conter pelo menos um número, uma letra minúscula, uma letra maiúscula e um caractere especial.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(va) {
    if (va.length === 0) {
      setError(`Prencha o campo!`);
      return false;
    }
    if (types[type] && !types[type].regex.test(value)) {
        setError(types[type].msg);
        return false;
      }
    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
