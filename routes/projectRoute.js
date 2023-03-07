const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
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
router.delete("/:id", deleteProject);

//UPDATE A NEW PROJECT
router.patch("/:id", updateProject);

module.exports = router;
