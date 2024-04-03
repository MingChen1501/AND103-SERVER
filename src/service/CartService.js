const CartRepository = require('../repository/CartRepository');

const CartService = {
  async getCarts() {
    return await CartRepository.getCarts();
  },
  async getCartById(id) {
    return await CartRepository.getCartById(id);
  },
  async getCartByUserId(userId) {
    return await CartRepository.getCartByCustomerId(userId);
  },
  async createCart(cart) {
    return await CartRepository.createCart(cart);
  },
  async updateCart(id, cart) {
    return await CartRepository.updateCart(id, cart);
  },
  async deleteCart(id) {
    return await CartRepository.deleteCart(id);
  },
  async getCartDetailsByCartId(cartId) {
    return await CartRepository.getCartById(cartId);
  },
  async deleteCartDetail(cartId, detailId) {
    return await CartRepository.deleteCartDetail(cartId, detailId);
  },
  async addCartDetail(cartId, detail) {
    return await CartRepository.addCartDetail(cartId, detail);
  },
  async updateCartDetail(cartId, detailId, detailData) {
    return await CartRepository.updateCartDetail(cartId, detailId, detailData);
  },
  async deleteCartItemsFromCart(cartId, detailIds) {
    return await CartRepository.deleteCartItemsFromCart(cartId, detailIds);
  }
}
module.exports = CartService;