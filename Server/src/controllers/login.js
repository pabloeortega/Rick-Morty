const { User } = require('../DB_connection');


const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).send({ message: 'Faltan datos' });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }

    if (user.password !== password) {
      return res.status(403).send({ message: 'Contraseña incorrecta' });
    }

    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = login;
