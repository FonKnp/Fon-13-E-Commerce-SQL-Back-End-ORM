const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      return res.status(200).json({ message: "No category found!" });
    }
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json({ message: "No category found!" });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);
    return res.status(200).json(createCategory);
  } catch (err) {
    return res.status(400).json({
      message: "Error, couldn't Post in this route.",
    });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!categoryUpdate) {
      return res.status(404).json({
        message: "id is not found!",
      });
    }
    return res.status(200).json(categoryUpdate);
  } catch (err) {
    return res.status(500).json({
      message: "Category update failed!",
    });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deleteCategory) {
      return res.status(404).json({
        message: "id is not found!",
      });
    }
    return res.status(200).json(deleteCategory);
  } catch (err) {
    return res.status(500).json({
      message: "Delete failed!",
    });
  }
});

module.exports = router;
