const express = require("express");
const router = express.Router();

const Team = require("../../models/Team");

// @route GET api/team/test
// @desc Test team route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Team Works good job man" }));

// @route GET api/team
// @desc Get all team members
// @access Public
router.get("/", async (req, res) => {
	try {
		const team = await Team.find();
		res.json(team);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No team members found");
	}
});

// @route GET api/team/:id
// @desc Get team member by ID
// @access Public
router.get("/:id", async (req, res) => {
	try {
		const team = await Team.findById(req.params.id);
		res.json(team);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No team member found");
	}
});

// @route POST api/team
// @desc Add a team member
// @access admin

router.post("/", (req, res) => {
	Team.create(req.body)
		.then((team) => res.json({ msg: "Team member added successfully" }))
		.catch((err) => res.status(400).json({ err }));
});

// @route DELETE api/team/:id
// @desc Delete a team member
// @access admin

router.delete("/:id", (req, res) => {
	Team.findOneAndDelete({ _id: req.params.id })
		.then((team) => res.json({ msg: "Team member deleted successfully" }))
		.catch((err) => res.status(404).json({ error: "No such team member" }));
});

module.exports = router;
