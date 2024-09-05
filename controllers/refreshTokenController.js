const jwt = require('jsonwebtoken');

const RefreshToken = require('../models/refreshTokensModel');
const Token= require('../models/tokensModel');
const Users = require('../models/usersModel');

const refreshToken = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Bad request' });
  }

  const refreshToken = req.headers.refresh_token;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Missing refresh token' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await Users.findById(decoded.id);
    console.log(user)

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const foundToken = await RefreshToken.findOne({ refreshToken: refreshToken, userId: decoded.id});

    if (!foundToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    const accessToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '2m' });
    const newRefreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    // Update the TokenModel with the new accessToken
    const tokenDoc = await Token.findOne({ userId: user.id });
    if (tokenDoc) {
      tokenDoc.token = accessToken;
      await tokenDoc.save();
    } else {
      const newTokenDoc = new Token({ token: accessToken, userId: user.id });
      await newTokenDoc.save();
    }

    await RefreshToken.deleteOne({ refreshToken: refreshToken, userId: decoded.userId });
    const newRefreshTokenDoc = new RefreshToken({ refreshToken: newRefreshToken, userId: user.id });
    await newRefreshTokenDoc.save();

    return res.json({
      username: user.username,
      token: accessToken,
      newRefreshToken: newRefreshToken
    });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};


module.exports = refreshToken;