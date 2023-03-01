const { Router } = require("express");
const express = require("express");

//router
const router = express.Router();

//GET ALL PROJECTS
router.get("/", (req, res) => {
  res.json({ message: "GET ALL PROJECTS" });
});

//GET A SINGLE PROJECT
router.get("/:id", (req, res) => {
  res.json({ message: "GET A SINGLE PROJECT" });
});

//POST A NEW PROJECT
router.post("/", (req, res) => {
  res.json({ message: "POST A NEW PROJECT" });
});
//DELETE A PROJECT
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A PROJECT" });
});
//UPDATE A NEW PROJECT
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE A PROJECT" });
});
module.exports = router;
