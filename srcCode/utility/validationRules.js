export const validationRules = element => {
  let errors = {};
  const { name, value, required } = element;
  if (required && value.trim() === "") {
    errors.required = "This is an required field";
    return errors;
  }
  let regexValidation = regex => {
    return regex.test(String(value));
  };
  switch (name) {
    case "email": {
      let validate = () => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexValidation(regex);
      };
      if (value && !validate()) {
        errors.error = "Enter valid email id";
        return errors;
      } else {
        return (errors.error = "");
      }
    }
    case "password": {
      let validate = () => {
        let regex = /^[A-Za-z]\w{5,14}$/;
        return regexValidation(regex);
      };
      if (value && !validate()) {
        errors.error = "Enter valid password";
        return errors;
      } else {
        return (errors.error = "");
      }
    }
  }
  return errors;
};
