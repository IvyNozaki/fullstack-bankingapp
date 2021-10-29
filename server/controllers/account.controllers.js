// Import the User model
const User = require("../models/user.models");

const account_post = async (req, res) => {
  const { acctName, balance, id } = req.body; 
  
  try {
    const user = await User.findById(id);
    
    const newAccount = { acctName, balance };

    user.accounts.push(newAccount);

    user.markModified("accounts");
    
    const result = await user.save();

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: errors });
  }
};

module.exports = {
  account_post
};