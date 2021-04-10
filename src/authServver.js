import express from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

app.listen(4000);
