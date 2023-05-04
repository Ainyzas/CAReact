import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SALT = process.env.JWT_SALT;

export async function validateJwt(req, res, next) {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, JWT_SALT);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ error: 'jwt invalid' });
  }
}
