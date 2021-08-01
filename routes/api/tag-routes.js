const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// router.get("/", (req, res) => {
//     // find all tags
//     // be sure to include its associated Product data
// });
router.get("/", async(req, res) => {
    try {
        const tagData = await Tag.findAll(req.params.id, {
            where: { id: req.params.id },
            include: [{
                model: Product,
            }],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// router.get("/:id", (req, res) => {
//     // find a single tag by its `id`
//     // be sure to include its associated Product data
// });
router.get("/:id", async(req, res) => {
    try {
        const tagData = await Tag.findOne(req.params.id, {
            where: { id: req.params.id },
            include: [{
                model: Product,
            }],
        });

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new tag
router.post("/", async(req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a tag's name by its `id` value
router.put("/", async(req, res) => {
    try {
        const tag = await Tag.update(req.params.id, {
            where: { id: req.params.id },
        });

        res.status(200).json(tag);
    } catch (err) {
        res.status(500).json(err);
    }
});
// delete on tag by its `id` value
router.delete("/:id", async(req, res) => {
    try {
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;