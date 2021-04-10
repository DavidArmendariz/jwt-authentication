import jwt from 'jsonwebtoken';

export default function generateAccessToken(user, options) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, options);
}
