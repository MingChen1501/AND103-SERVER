const Category = require('../../../model/Category.js');

const Validator = {
  requiredField: async (req, res, next) => {
    const category = new Category(req.body);
    const validationErrors = category.validateSync();
    if (validationErrors) {
      const errors = Object.values(validationErrors.errors).map(error => error.message);
      return res.status(400).send({ message: 'Validation errors', errors });
    } else {
      next();
    }
  },
};

module.exports = Validator;