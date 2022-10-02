const router = require("express").Router();
const products = require("../controllers/products");
const { validateString } = require("../validators/validators");

router.get("/", products.getAll);
router.post("/", validateString, products.create);
router.get("/showone/:id", products.getProductById);
router.delete("/delete/:id", products.deleteProductById);
router.put("/update/id", products.updateProduct);

module.exports = router;
