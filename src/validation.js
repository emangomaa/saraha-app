const validation = (inputdata) => {
  let errors = {};
  let email_pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let password_pattern = /^[0-9]{3,6}$/;

  if (inputdata.name === "") {
    errors.name = "name required";
  } else if (inputdata.name && inputdata.name.length <= 2) {
    errors.name = "name is too shorter";
  }

  if (inputdata.email === "") {
    errors.email = "Email required";
  } else if (!email_pattern.test(inputdata.email)) {
    errors.email = "email not matched";
  }

  if (inputdata.password === "") {
    errors.password = "password required";
  } else if (!password_pattern.test(inputdata.password)) {
    errors.password = "password more than 3 numbers from 0-9";
  }

  if (inputdata.age === "") {
    errors.age = "age required";
  } else if (inputdata.age < 20 || inputdata.age > 50) {
    errors.age = "age between 20 and 50 only";
  }
  return errors;
};
export default validation;
