const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags  
// be sure to include its associated Product data
router.get("/", async(req, res) => {
    try {
        const tagData = await Tag.findAll({

            include: [{
                model: Product,
            }],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});
// router.get("/:id", (req, res) => {
//     // find a single tag by its `id`
//     // be sure to include its associated Product data
// });
router.get("/:id", async(req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            where: { id: req.params.id },
            include: [{
                model: Product,
            }],
        });

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// create a new tag
router.post("/", async(req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// update a tag's name by its `id` value
router.put("/", async(req, res) => {
    try {
        const tagData = await Tag.update(req.params.id, {
            where: { id: req.params.id },
        });

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
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
        console.log(err);
    }
});

module.exports = router;