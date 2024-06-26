const express = require("express");
const router = express.Router();

const ProductService = require("../../service/ProductService");
const ProductValidator = require("../middleware/validator/ProductValidator");
const CategoryService = require("../../service/CategoryService");
router.get("/", async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductService.getProductById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
});
router.post("/", ProductValidator.createProduct, async (req, res) => {
  try {
    const result = await ProductService.createProduct(req.dto);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
});
// router.put("/:id", async (req, res) => {
//   const productId = req.params.id;
//   const productData = req.body;
//   try {
//     await ProductService.updateProduct(productId, productData);
//     res.status(200).json(productData);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product" });
//   }
// });
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    await ProductService.deleteProduct(productId);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    if (error.message === "Product not found") {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(500).json({ message: "Error deleting product" });
    }
  }
});
// router.patch("/:id", async (req, res) => {
//   const productId = req.params.id;
//   const productData = req.body;
//   try {
//     const result = await ProductService.updateProduct(productId, productData);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product" });
//   }
// });
router.post("/:id/details", async (req, res) => {
  const productId = req.params.id;
  const {color, size, stock, price} = req.body;
  const detailData = {color, size, stock, price};
  try {
    const result = await ProductService.createProductDetail(productId, detailData);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
});
router.get("/:id/categories", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const categoryIds = product.categories;
    const categories = await CategoryService.getCategoryByIds(categoryIds);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});
module.exports = router;
