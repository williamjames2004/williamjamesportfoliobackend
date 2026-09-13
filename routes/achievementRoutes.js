const express = require("express");

const {
    createAchievement,
    getAchievements
} = require("../controllers/achievementController");

const router = express.Router();

router.post("/", createAchievement);

router.get("/", getAchievements);

module.exports = router;