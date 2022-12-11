const User = require("../models/user");
const Products = require("../models/products");

const getUserById = (req, res) => {
  const name = req.body.user;
  const pass = req.body.pass;
  console.log(req.body);

  User.find({ name: name, pass: pass }, function (err, user) {
    if (err) {
      res.send({ msg: "user not found", err, isLogged: false });
    }
    if (user.length > 0) {
      res.json({ msg: "Login correct", user: user, isLogged: true });
    } else {
      res.json({ msg: "Login correct", user: user, isLogged: false });
    }
  });
};

module.exports = {
  getUserById,
};
