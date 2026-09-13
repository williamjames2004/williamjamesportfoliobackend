const express = require("express");

const {
    createProject,
    getProjects
} = require("../controllers/projectController");

const router = express.Router();


/* ==================== PROJECT ROUTES ==================== */

router.post("/admin/addproject", createProject);

router.get("/getprojects", getProjects);


module.exports = router;