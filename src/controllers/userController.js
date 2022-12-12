const Users = require("../models/user");

const getUserById = (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  try {
    Users.findOne({ user: user }, function (err, user) {
      if (err) {
        res.json(err);
      }

      if (!user) {
        res.send({ msg: "no hay usuarios" });
      }

      if (user && user.pass === req.body.pass) {
        res.json({ msg: "Login correct", user: user, isLogged: true });
      } else {
        res.json({ msg: "wrong user or pass", isLogged: false });
      }
    });
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  getUserById,
};
