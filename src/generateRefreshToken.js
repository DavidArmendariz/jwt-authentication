import jwt from 'jsonwebtoken';

export default function generateRefreshToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}
