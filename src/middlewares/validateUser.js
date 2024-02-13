const { hashedPassword } = require("./auth");

const validateUser = (req, res, next) => {

const { firstname, lastname, email, city, language, hashedPassword } = req.body;
 const errors = [];
 const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (firstname == null) {
    errors.push({ field: "firstname", message: "This field is required" });
  } else if (firstname.length >= 50) {
    errors.push({ field: "firstname", message: "Should contain less than 50 characters" });
  }
  if (lastname == null) {
    errors.push({ field: "lastname", message: "This field is required" });
  } else if (lastname.length >= 50) {
    errors.push({ field: "lastname", message: "Should contain less than 50 characters" });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email' });
  } else if (email.length >= 50) {
    errors.push({ field: "email", message: "Should contain less than 50 characters"})
  }
  if (city == null) {
    errors.push({ field: "city", message: "This field is required" });
  } else if (city.length >= 75) {
    errors.push({ field: "city", message: "Should contain less than 75 characters"})
  }
  if (language == null) {
    errors.push({ field: "language", message: "This field is required" });
  } else if (language.length >= 50) {
    errors.push({ field: "language", message: "Should contain less than 50 characters"})
  }
  if (hashedPassword == null) {
    errors.push({ field: "password", message: "This field is required" });
  } else if (hashedPassword.length >= 50) {
    errors.push({ field: "password", message: "Should contain less than 50 characters"})
  }
 
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateUser, hashedPassword;