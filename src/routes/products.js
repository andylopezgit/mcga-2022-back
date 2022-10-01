const router = require("express").Router();
const products = require("../controllers/products");

router.get("/", products.getAll);
router.post('/"', products.create);
router.get("/:id", products.getProductById);
router.delete("/:id", products.deleteProductById);
router.put("/id", products.updateProduct);

module.exports = router;
