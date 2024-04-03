const Order = require('../model/Order');

const OrderRepository = {
  async createOrder(orderData) {
    try {
      const order = await Order.create(orderData);
      console.log(order);
      return order;
    } catch (error) {
      throw error;
    }
  },
  async getOrdersByUserId(userId) {
    try {
      const orders = await Order.find({ userId: userId });
      return orders;
    } catch (error) {
      throw error;
    }
  },
  async getOrderById(orderId) {
    try {
      const order = await Order.findById(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  },
  async updateOrder(orderId, orderData) {
    try {
      const order = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
      return order;
    } catch (error) {
      throw error;
    }
  },
  async deleteOrder(orderId) {
    try {
      const order = await Order.findByIdAndDelete(orderId);
      return order;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderRepository;