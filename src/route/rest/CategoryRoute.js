const express = require("express");
const router = express.Router();
const CategoryService = require("../../service/CategoryService.js");
const Validator = require("../middleware/validator/CategoryValidator.js");
router.get("/", async (req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
});

router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await CategoryService.getCategoryById(categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching category" });
  }
});

router.post("/", Validator.requiredField, async (req, res) => {
  const categoryData = req.body;
  try {
    const result = await CategoryService.createCategory(categoryData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating category" });
  }
});

router.put("/:id", Validator.requiredField, async (req, res) => {
  const categoryId = req.params.id;
  const categoryData = req.body;
  try {
    await CategoryService.updateCategory(categoryId, categoryData);
    res.status(200).json(categoryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating category" });
  }
});
router.patch("/:id", Validator.containsField, async (req, res) => {
  const categoryId = req.params.id;
  const { name, description, image } = req.body;
  const categoryData = { name, description, image };
  try {
    const updatedCategory = await CategoryService.updateCategory(categoryId, categoryData);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category" });
  }
});
router.delete("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const result = await CategoryService.deleteCategory(categoryId);
    console.log(result);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    if (error.message === "Category not found") {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.status(500).json({ message: "Error deleting category" });
    }
  }
});
module.exports = router;
