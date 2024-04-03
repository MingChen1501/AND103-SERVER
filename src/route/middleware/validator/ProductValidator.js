const validator = {
  createProduct: (req, res, next) => {
    const { name, price, description } = req.body;
    req.dto = {
      name: name,
      price: price,
      description: description,
    };
    if (!name || isNaN(price) || !description) {
      res.status(400).json({ message: "Invalid request" });
    } else {
      next();
    }
  },
};
module.exports = validator;
