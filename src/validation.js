const validation = (inputdata) => {
  let errors = {};
  let email_pattern = "";
  let password_pattern = "/^[0-9]{3,6}$/";

  if (inputdata.name === "") {
    errors.name = "name required";
  } else if (inputdata.name.length < 2) {
    errors.name = "name is too shorter";
  }

  if (inputdata.email === "") {
    errors.email = "Email required";
  } else if (!inputdata.email.test(email_pattern)) {
    errors.email = "email not correct";
  }

  if (inputdata.password === "") {
    errors.password = "password required";
  } else if (!inputdata.password.test(password_pattern)) {
    errors.password = "password not matched";
  }

  if (inputdata.age === "") {
    errors.age = "age required";
  } else if (inputdata.age < 20 || inputdata.age > 50) {
    errors.age = "age between 20 and 50 only";
  }
  return errors;
};
export default validation;
