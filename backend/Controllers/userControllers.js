const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel')
const generateToken = require('../Config/GenerateToken');
const jwt = require("jsonwebtoken");



const registerUser = asyncHandler(async (req, res) => {
    const { Name, Email, Password } = req.body;
    if (!Name || !Email || !Password) {
        res.status(400).json({msg:"sucesss"});
    throw new Error("Please Enter all the Feilds");
    }
  const gmailPattern = /@gmail\.com$/;
  const isGmail = gmailPattern.test(Email);
  if (isGmail) {
    const userExists = await User.findOne({ Email });
    if (userExists) {
        res.status(400).json({msg:"sucesss"});
      throw new Error("User already exists");
    }
    const user = await User.create({
      Name,
      Email,
      Password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
        token: generateToken(user._id),
      });
    } else {
        res.status(400).json({msg:"sucesss"});
      throw new Error("User not found");
    }
  } else {
        res.status(400).json({msg:"sucesss"});
      throw new Error("mail should be in the form of example@gmail.com");
  }
})


const authUser = asyncHandler(async(req, res)=> {
   const { Email, Password } = req.body;
  if (!Email || !Password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  const user = await User.findOne({ Email });
  if (user && (await user.matchPassword(Password))) {
    res.json({
      _id: user._id,
      Name: user.Name,
      Email: user.Email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


const deleteintegration = asyncHandler(async (req,res) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      console.log(user);
      await User.deleteOne({ _id: user._id })
      console.log('User deleted successfully');
      res.status(200);
    } catch (error) {
      console.log('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

module.exports = { registerUser, authUser ,deleteintegration};