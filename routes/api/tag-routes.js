const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });
    return res.status(200).json(tagData);
  } catch {
    return res.status(500).send("Tags not found!");
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagInfo = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagInfo) {
      return res.status(404).json({
        message: "This id is not found!",
      });
    }
    return res.status(200).json(tagInfo);
  } catch (err) {
    return res.status(500).json({
      message: "Tag not found!",
    });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    // Create a new tag using the data from req.body
    const createTag = await Tag.create(req.body);

    // Respond with the created tag information
    return res.status(200).json(createTag);
  } catch (err) {
    // Handle any errors that occur during the creation process
    return res.status(404).json({
      message: "Tag create failed!",
    });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updateTag[0]) {
      return res.status(400).json({
        message: "This id is not found!",
      });
    }
    return res.status(200).json(updateTag);
  } catch (err) {
    return res.status(500).json({
      message: "Tag update failed!",
    });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!deleteTag) {
      return res.status(400).json({
        message: "Request unable to be fulfilled, no tag with this id found!",
      });
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    return res.status(500).json({
      message: "Request unable to be fulfilled, tag deletion failed!",
    });
  }
});

module.exports = router;
