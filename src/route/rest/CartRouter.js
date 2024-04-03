const router = require("express").Router();

const { log } = require("console");
const CartService = require("../../service/CartService");

router.get("/", async (req, res) => {
  const customerId = req.query.userId;
  log(customerId);
  const carts = await CartService.getCartByCustomerId(customerId);
  res.status(200).json(carts);
});
router.post("/", async (req, res) => {
  const cartData = req.body;

  try {
    const result = await CartService.createCart(cartData);
    res.status(201).json(result);
  } catch (error) {
    log(error);
    res.status(500).json({ message: "Error creating cart" });
  }
});
router.delete("/:id", async (req, res) => {
  const cartId = req.params.id;
  try {
    const result = await CartService.deleteCart(cartId);
    res.status(200).json(result);
  } catch (error) {
    log(error);
    res.status(500).json({ message: "Error deleting cart" });
  }
});
router.get("/:id/details", async (req, res) => {
  const cartId = req.params.id;
  log(cartId);
  try {
    const cart = await CartService.getCartById(cartId);
    console.log(cart);
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: "Error indexing cart" });
  }
});

router.patch("/:id/details/:detailId", async (req, res) => {
  //TODO: validating payload
  const cartId = req.params.id;
  const detailId = req.params.detailId;
  const detailData = req.body;
  log(cartId);
  try {
    const result = await CartService.updateCartDetail(cartId, detailId, detailData);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart" });
  }
});
router.delete('/:id/details/:detailId', async (req, res) => {
  log('delete cart detail');
  const cartId = req.params.id;
  const detailId = req.params.detailId;
  try {
    const result = await CartService.deleteCartDetail(cartId, detailId);
    res.status(200).json(result);
  } catch (error) {
    log(error);
    res.status(500).json({ message: "Error deleting cart detail" });
  }
});
router.post("/:id/details", async (req, res) => {
  const cartId = req.params.id;
  const detailData = req.body;
  try {
    const result = await CartService.addCartDetail(cartId, detailData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error adding cart detail" });
  }
});
module.exports = router;