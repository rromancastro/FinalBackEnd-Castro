const { Router } = require("express");
const { CartController } = require("../controllers/cart-controller");

const router = Router();

router.post('/', CartController.createCart);
router.get('/:cartId', CartController.getCart);
router.post('/:cartId/products', CartController.addProduct);
router.delete('/:cartId', CartController.deleteCart);

module.exports = router;
