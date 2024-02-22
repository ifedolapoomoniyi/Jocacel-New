const express = require("express");
const router = express.Router();

const Property = require("../../models/Properties");

// @route GET api/properties/test
// @desc Test properties route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Properties Works" }));

// @route GET api/properties
// @desc Get all properties
// @access Public
router.get("/", async (req, res) => {
	try {
		const properties = await Property.find();
		res.json(properties);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No properties found");
	}
});

// @route GET api/properties/:id
// @desc Get property by ID
// @access Public
router.get("/:id", async (req, res) => {
	try {
		const property = await Property.findById(req.params.id);
		res.json(property);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No property found");
	}
});

// @route POST api/properties
// @desc Add a property
// @access admin
router.post("/", (req, res) => {
	Property.create(req.body)
		.then((property) => res.json({ msg: "Property added successfully" }))
		.catch((err) => res.status(400).json({ err }));
});

// @route DELETE api/properties/:id
// @desc Delete a property
// @access admin

router.delete("/:id", (req, res) => {
	Property.findOneAndDelete({ _id: req.params.id })
		.then((property) => res.json({ msg: "Property deleted successfully" }))
		.catch((err) => res.status(404).json({ error: "No such property" }));
});

module.exports = router;
