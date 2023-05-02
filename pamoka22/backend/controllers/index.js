import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/UserModel.js';

dotenv.config();

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({ message: 'registration successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SALT, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
