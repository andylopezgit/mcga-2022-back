const User = require("../models/user");
const Products = require("../models/products");

const getUserById = (req, res) => {
  const name = req.body.name;
  const pass = req.body.pass;

  User.find({ name: name, pass: pass }, function (err, user) {
    if (err) {
      res.send({ msg: "user not found", err, isLogged: false });
    }
    console.log(user);
    res.json({ msg: "Login correct", user: user, isLogged: true });
  });
};

module.exports = {
  getUserById,
};
