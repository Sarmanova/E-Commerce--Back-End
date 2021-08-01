const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async(req, res) => {
    try {
        const categoryData = await Category.findAll();
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async(req, res) => {
    try {
        const category = await Category.findOne(req.params.id, {
            where: { id: req.params.id },
            include: [{ model: Product }],
        });

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new category
router.post("/", async(req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err);
    }
});
// update a category by its `id` value
router.post("/", async(req, res) => {
    try {
        const category = await Category.update(req.params.id, {
            where: { id: req.params.id },

        });

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a category by its `id` value

router.delete("/:id", async(req, res) => {
    try {
        const categoryData = await Category.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;