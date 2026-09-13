const express = require("express");

const {
    createCertification,
    getCertifications
} = require("../controllers/certificationController");

const router = express.Router();

router.post("/", createCertification);

router.get("/", getCertifications);

module.exports = router;