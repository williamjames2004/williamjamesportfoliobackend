const express = require("express");

const {
    createProjectInquiry,
    getProjectInquiries
} = require("../controllers/projectInquiryController");

const router = express.Router();

router.post("/", createProjectInquiry);
router.get("/", getProjectInquiries);

module.exports = router;