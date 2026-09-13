const express = require("express");

const {
    createJobInquiry,
    getJobInquiries
} = require("../controllers/jobInquiryController");

const router = express.Router();

router.post("/", createJobInquiry);
router.get("/", getJobInquiries);

module.exports = router;