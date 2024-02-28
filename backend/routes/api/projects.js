const express = require("express");
const router = express.Router();

const Project = require("../../models/Projects");

// @route GET api/projects/test
// @desc Test projects route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Project API works" }));

// @route GET api/projects
// @desc Get all projects
// @access Public

router.get("/", async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No projects found");
	}
});

// @route GET api/projects/:id
// @desc Get project by ID
// @access Public

router.get("/:id", async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		res.json(project);
	} catch (err) {
		console.error(err.message);
		res.status(404).send("No project found");
	}
});

// @route POST api/projects
// @desc Add a project
// @access admin

router.post("/", (req, res) => {
  const imageData = req.body
  // const imageBuffer = Buffer.from(imageData.data, "base64")
  // req.body.data = imageBuffer
	Project.create(req.body)
		.then((project) => res.json({ msg: "Project added successfully" }))
		.catch((err) => res.status(400).json({ err }));
});

// @route DELETE api/projects/:id
// @desc Delete a project
// @access admin

router.delete("/:id", (req, res) => {
	Project.findOneAndDelete({ _id: req.params.id })
		.then((project) => res.json({ msg: "Project deleted successfully" }))
		.catch((err) => res.status(404).json({ error: "No such project" }));
});

module.exports = router;