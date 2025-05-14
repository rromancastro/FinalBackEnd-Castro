import { CartManager } from "../managers/cart-manager";

class CartController {
  async createCart(req, res) {
    const cart = await cartService.createCart();
    res.status(201).json(cart);
  }

  async getCart(req, res) {
    const { cartId } = req.params;
    const cart = await cartService.getCartById(cartId);
    res.json(cart);
  }

  async addProduct(req, res) {
    const { cartId } = req.params;
    const { productId, quantity } = req.body;
    const updatedCart = await cartService.addProductToCart(cartId, productId, quantity);
    res.json(updatedCart);
  }

  async deleteCart(req, res) {
    const { cartId } = req.params;
    await cartService.deleteCart(cartId);
    res.status(204).send();
  }
}

export const CartController = new CartController(CartManager);
