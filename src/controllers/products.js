const Products = require("../models/products");

const getAll = ((req,res) => {
    Products.find({ isDeleted: false})
        .then((data) => res.json({ data}))
        .catch((err) => res.err)
})

 const create = ((req,res) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
    };

    Products.create(newProduct)
        .then((data) => res.json({ msg: 'Product add', data}))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  })


  module.exports = {
    getAll,
    create
  }

