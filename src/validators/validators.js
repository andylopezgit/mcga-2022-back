const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateString = [
  check("name")
    .isString()
    .exists()
    .isLength({ min: 3 })
    .withMessage("El nombre debe contener como minimo 3 caracteres"),
  check("price")
    .isNumeric()
    .exists()
    .withMessage("El precio debe ser un numero"),
  check("stock")
    .isNumeric()
    .exists()
    .withMessage("El stock debe ser un numero"),
  check("description")
    .isString()
    .exists()
    .isLength({ min: 3 })
    .withMessage("la descripcion debe ser mayor a 3 letras y es obligatoria"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateString };
