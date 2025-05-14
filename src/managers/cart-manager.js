import {cartModel} from "../models/cart-model"

class CartManager {
  async createCart() {
    return await Cart.create({ products: [] });
  }

  async getCartById(cartId) {
    return await Cart.findById(cartId).populate('products.product');
  }

  async addProductToCart(cartId, productId, quantity = 1) {
    const cart = await Cart.findById(cartId);
    const index = cart.products.findIndex(p => p.product.toString() === productId);

    if (index !== -1) {
      cart.products[index].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    return await cart.save();
  }

  async deleteCart(cartId) {
    return await Cart.findByIdAndDelete(cartId);
  }
}

export const CartManager = new CartManager(cartModel);

