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

router.get("/:id", async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findAll({
        where: {
            id: req.params.id,
        },
    });
    res.json(category);
});

// router.post("/", (req, res) => {
//     // create a new category
// });
router.post("/", async(req, res) => {
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.put("/:id", (req, res) => {
    // update a category by its `id` value
});

// router.delete("/:id", (req, res) => {
//     // delete a category by its `id` value
// });
router.delete("/:id", async(req, res) => {
    try {
        const categoryData = await Category.category({
            where: { id: req.params.id },
        });
        if (!categoryData) {
            res.status(404).json({ message: "No trip with this id!" });
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;