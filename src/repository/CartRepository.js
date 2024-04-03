const { log } = require('console');
const Cart = require('../model/Cart');

const CartRepository = {

  async getCarts() {
    return await Cart.find();
  },
  async getCartById(id) {
    return await Cart.findById(id);
  },
  async getCartByCustomerId(customerId) {
    return await Cart.find({ customerId });
  },
  async createCart(cart) {
    return await Cart.create(cart);
  },
  async updateCart(id, cart) {
    return await Cart.findByIdAndUpdate(id, cart, { new: true });
  },
  async deleteCart(id) {
    return await Cart.findByIdAndDelete(id);
  },
  async deleteCartDetail(cartId, detailId) {
    const cart = await Cart.findById(cartId);
    log(cart);
    log(cart.items)
    const cartItems = cart.items;
    const newCartItems = cartItems.filter((item) => {
      return item._id != detailId;
    });
    log(newCartItems);
    cart.items = newCartItems;
    return await cart.save();
  },
  async addCartDetail(cartId, detail) {
    const cart = await Cart.findById(cartId);
    cart.items.push(detail);
    return await cart.save();
  },
  async updateCartDetail(cartId, detailId, detailData) {
    const cart = await Cart.findById(cartId);
    const items = cart.items;
    items.map((item) => {
      if (item._id == detailId) {
        item.quantity = detailData.quantity;
      }
    });
    cart.items = items;
    return await cart.save();
  }
}
module.exports = CartRepository;