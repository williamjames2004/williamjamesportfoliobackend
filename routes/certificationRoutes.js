const express = require("express");

const {
    createCertification,
    getCertifications
} = require("../controllers/certificationController");

const router = express.Router();

router.post("/admin/addcertification", createCertification);

router.get("/getcertifications", getCertifications);

module.exports = router;