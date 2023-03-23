import User from '../../db/UserModel.js';

export async function signUp(req, res) {
  try {
    const { email, password, firstName, lastName, dateOfBirth } = req.body;

    const user = await User.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
    });

    const resp = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      id: user.id,
    };

    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password }, { id: true });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function signOut(req, res) {
  res.json({
    hello: 'sup, signOut',
  });
}
