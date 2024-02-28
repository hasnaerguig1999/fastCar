import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import User from '../models/user';

const register = [
  // Validate request data
  check('email').isEmail().withMessage('Must be a valid email'),
  check('password').isLength({ min: 5 }).withMessage('Must be at least 5 chars long'),
  async (req, res) => {
    // Handle request after validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword });

      return res.status(201).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
];

const login = [
  // Validate request data
  check('email').isEmail().withMessage('Must be a valid email'),
  check('password').isLength({ min: 5 }).withMessage('Must be at least 5 chars long'),
  async (req, res) => {
    // Handle request after validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
];

export { register, login };