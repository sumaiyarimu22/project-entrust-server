const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

//router
const router = express.Router();

//GET ALL PROJECTS
router.get("/", getAllProjects);

//GET A SINGLE PROJECT
router.get("/:id", getSingleProject);

//POST A NEW PROJECT
router.post("/", postProject);

//DELETE A PROJECT
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A PROJECT" });
});

//UPDATE A NEW PROJECT
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE A PROJECT" });
});

module.exports = router;
