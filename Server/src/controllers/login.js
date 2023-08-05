const users = require('../utils/users')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const { email, password } = req.query
  const user = users.find(user => user.email === email)

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  return res.status(200).json({ access: true })
}

module.exports = {
  login
}