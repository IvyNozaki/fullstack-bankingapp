// Import the User model
const User = require("../models/user.models");

// Import Helper functions
const handleErrors = require("../helpers/handleError.helper");
const { createToken } = require("../helpers/jwt.helper");

////////////
// Signup //
////////////

const signup_get = (req, res) => {
  res.status(200).json({ message: "signup"});
};

const signup_post = async (req, res) => {
  const { email, password, username } = req.body; 
  const totalBalance = 0;
  
  try {
    // Create a new user
    const user = await User.create({ email, password, username, totalBalance });
    
    // Create token with jwt
    const token = await createToken(user._id);
    
    // Save the token to the cookies
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 3 * 24 * 60 * 60});
    
    // final response to front end
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

///////////
// Login //
///////////

const login_get = (req, res) => {
  res.status(200).json({ messaage: "login" });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Uses the custom static function login() to find the user in the db and return it
    const user = await User.login(email, password);

    // Create a token with jwt
    const token = await createToken(user["_id"]);
    
    // Save the JWT as a cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 3 * 24 * 60 * 60});
    
    // final response to front end
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

////////////
// Logout //
////////////

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "Log out successful" });
};


module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
  logout_get
};