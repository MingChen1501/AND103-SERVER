const router = require('express').Router();
const OrderService = require('../../service/OrderService');

const { log } = require('console');

router.get('/', async (req, res) => {
  //TODO validate query params
  const userId = req.query.userId;
  try {
    const orders = await OrderService.getOrdersByUserId(userId);
    if (!orders) {
      res.status(204).json({ message: 'No orders found' });
      return;
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  const payload = JSON.stringify(req.body);
  // console.log(payload);
  const result = await OrderService.createOrder(req.body);
  res.status(201).json(result);
})
module.exports = router;