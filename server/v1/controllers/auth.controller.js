const User = require('../models/user.model')

module.exports.getByLogin = async (req, res) => {
  try {
    const userFound = await User.findOne({ login: req.body.login })

    if (userFound) {
      if (req.body.password === userFound.password) {
        const userData = {
          id: userFound._id,
          login: userFound.login,
          name: userFound.name,
          admin: userFound.admin,
          created: userFound.created
        }
        res.status(200).json(userData)
      } else {
        res.status(401).json({ message: 'Неверный логин или пароль!' })
      }
    } else {
      res.status(401).json({ message: 'Неверный логин или пароль!' })
    }
  } catch (e) {
    res.status(500).json({ message: 'Не удалось получить пользователя!', e })
  }
}
