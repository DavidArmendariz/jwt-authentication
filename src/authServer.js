import express from 'express';
import { config } from 'dotenv';
import generateAccessToken from './generateAccessToken';
import generateRefreshToken from './generateRefreshToken';

config();

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user, { expiresIn: '15s' });
  const refreshToken = generateRefreshToken(user);
  res.json({ accessToken, refreshToken });
});

app.listen(4000);
