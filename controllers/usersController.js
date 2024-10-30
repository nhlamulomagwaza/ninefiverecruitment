const Users= require('../models/usersModel');
const Tokens= require('../models/tokensModel');
const RefreshTokens= require('../models/refreshTokensModel');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json('please fill in all the fields');
    }

    if (password !== confirmPassword) {
      return res.status(400).json('passwords do not match');
    }

    const userExists = await Users.findOne({ email, username });

    if (userExists) {
      return res.status(400).json({ message: 'candidate with those credentials already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    // Generate JWT and refresh tokens
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_REFRESH_SECRET);

    
    const accessToken = await Tokens.create({
        userId: user.id,
        token,
    });


    res.cookie('access_token', token, { httpOnly: true });
    
    // Store the refresh token in the RefreshTokens model
    await RefreshTokens.create({
      userId: user.id,
      refreshToken: refreshToken,
    });

    res.status(201).json({
      user,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};


const loginUser  = async (req, res) => {
  try {
      const { email, password } = req.body;
      if (!email || !password) {
          return res.status(400).json('please fill in all the fields');
      }

      const user = await Users.findOne({ email });

      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Find the existing token for the user
      const existingToken = await Tokens.findOne({ userId: user.id });

      // If an existing token is found, delete it from the database
      if (existingToken) {
          await Tokens.deleteOne({ userId: user.id });
      }

      // Generate a new token
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
      
      // Store the new token in the Tokens model
      const accessToken = await Tokens.create({
          userId: user.id,
          token,
      });

      // Generate a new refresh token
      const refreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_REFRESH_SECRET);

      // Store the refresh token in the RefreshTokens model
      await RefreshTokens.create({
          userId: user.id,
          refreshToken: refreshToken,
      });

      res.cookie('access_token', token, { httpOnly: true });

      res.status(200).json({
          message: 'Logged in successfully',
          user,
          accessToken: accessToken,
          refreshToken: refreshToken,
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
  }
};


const logoutUser = async (req, res) => {
    try {
      // Check if the user is authenticated
      const token = req.headers.authorization?.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
  
      // Verify the JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Delete the refresh token from the RefreshTokens model
      await RefreshTokens.deleteOne({ userId: decoded.id });
  
      // Delete the JWT cookie on the client-side
      res.clearCookie('access_token');
  
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

module.exports= {registerUser, loginUser, logoutUser};