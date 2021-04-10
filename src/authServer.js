import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import generateAccessToken from './generateAccessToken';
import generateRefreshToken from './generateRefreshToken';

dotenv.config();

const app = express();
app.use(express.json());

let refreshTokens = [];

app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
});

app.post('/login', (req, res) => {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user, { expiresIn: '15s' });
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
});

app.listen(4000);
