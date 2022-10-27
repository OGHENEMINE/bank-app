const createHttpError = require("http-errors");
const {
  registerValidator,
  loginValidator,
} = require("../validations/authValidation");
const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema");

async function register(firstname, lastname, email, password) {
  const { error } = registerValidator.validate({
    firstname,
    lastname,
    email,
    password,
  });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);

  if (await User.findOne({ email }))
    throw new createHttpError.BadRequest("Email already used");

  const RegisteredUser = await User.create({
    firstname,
    lastname,
    email,
    password,
  });

  // const token = await User.generateVerificationToken();
  // mailerService.sendUserVerificationCode(user, token);

  return RegisteredUser;
}

async function login(email, password) {
  const { error } = loginValidator.validate({
    email,
    password,
  });

  if (error) throw new createHttpError.BadRequest(error.details[0].message);
  const user = await User.findOne({ email });

  if (!(await user.comparePassword(password))) {
    throw new createHttpError.NotAcceptable("Invalid credentials!");
  }

  const { role, _id } = user;
  const token = jwt.sign({ role, _id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return {user, token}
}

module.exports = { register, login };
