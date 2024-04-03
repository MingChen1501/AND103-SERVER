const { log } = require("console");
const OrderRepository = require("../repository/OrderRepository");
const CartService = require("./CartService");
const ProductService = require("./ProductService");
const OrderService = {
  async createOrder(payload) {
    try {
      log(payload);
      /* 
      REMOVE ITEM FROM CART
      */
      const cart = await CartService.getCartById(payload.cart_id);
      log("cart: ", cart);
      await CartService.deleteCartItemsFromCart(
        payload.cart_id,
        payload.cart_item_ids
      );

      /* 
      get product info from cart items with product service
      */
      const cartItems = cart.items;
      log("cartItems: ", cartItems);
      const orderDetails = [];
      let totalAmount = 0;
      for (item of cartItems) {
        const product =
          await ProductService.getProductDetailByIdAndProductDetailId(
            item.productId.toString(),
            item.productDetailId.toString()
          );
        log("product: ", product);
        const details = product.details;
        const detail = details.find(
          (detail) => detail._id.toString() == item.productDetailId
        );
        log("detail: ", detail);
        orderDetails.push({
          productDetailId: detail._id,
          productId: item.productId,
          price: detail.price,
          quantity: item.quantity,
        });
        totalAmount += detail.price * item.quantity;
        log("orderDetails: ", orderDetails);
      }

      log("orderDetails: ", orderDetails);
      const orderDTO = {
        userId: payload.userId,
        orderDetails: orderDetails,
        totalAmount: totalAmount,
        paymentMethod: payload.payment_method,
      };
      const result = await OrderRepository.createOrder(orderDTO);
      log("orderDTO: ", orderDTO);
      /* 
      CREATE ORDER WITH CART ITEMS
      */
      return result;
    } catch (error) {
      throw error;
    }
  },
  async getOrdersByUserId(userId) {
    try {
      const orders = await OrderRepository.getOrdersByUserId(userId);
      return orders;
    } catch (error) {
      throw error;
    }
  },
  async getOrderById(orderId) {
    try {
      const order = await OrderRepository.getOrderById(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  },
  async updateOrder(orderId, orderData) {
    try {
      const order = await OrderRepository.updateOrder(orderId, orderData);
      return order;
    } catch (error) {
      throw error;
    }
  },
  async deleteOrder(orderId) {
    try {
      const order = await OrderRepository.deleteOrder(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = OrderService;
