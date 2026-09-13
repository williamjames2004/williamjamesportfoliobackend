const express = require("express");

const {
    createAchievement,
    getAchievements
} = require("../controllers/achievementController");

const router = express.Router();

router.post("/admin/addachievement", createAchievement);

router.get("/getachievements", getAchievements);

module.exports = router;