const Products = require("../models/products");

const getAll = (req, res) => {
  Products.find({ isDeleted: false })
    .then((data) => res.json({ data }))
    .catch((err) => res.err);
};

const create = (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
  };

  Products.create(newProduct)
    .then((data) => res.json({ msg: "Product add", data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const getProductById = (req, res) => {
  const id = req.params.id;
  Products.findOne({ _id: id })
    .then((data) => res.json({ msj: "Product found", status: "200", data }))
    .catch((error) => res.status(500).json({ msg: `Error: ${error}` }));
};

const deleteProductById = (req, res) => {
  const { id } = req.params;
  Products.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
    .then((data) => {
      if (data.length === 0)
        return res.status(404).json({
          msg: `Product not found by id ${id}`,
        });
      return res.json({
        msg: "Product deleted",
        data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        msg: `Error: ${error}`,
      });
    });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = req.body;
  Products.findOneAndUpdate({ _id: id }, { ...product }, { new: true })
    .then((data) => {
      if (data.length === 0)
        return res.status(404).json({
          msg: `Product not found by id: ${id}`,
        });
      return res.json({
        msg: "Product updated",
        data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        msg: `Error: ${error}`,
      });
    });
};

module.exports = {
  getAll,
  create,
  getProductById,
  deleteProductById,
  updateProduct,
};
