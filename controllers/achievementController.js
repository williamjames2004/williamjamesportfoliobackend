const Achievement = require("../models/Achievement");

const createAchievement = async (req, res) => {
    try {
        const {
            title,
            eventName,
            category,
            organizer,
            date,
            description,
            image
        } = req.body;

        if (
            !title ||
            !eventName ||
            !category ||
            !organizer ||
            !date ||
            !description ||
            !image
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const achievement =
            await Achievement.create({
                title,
                eventName,
                category,
                organizer,
                date,
                description,
                image
            });

        return res.status(201).json({
            success: true,
            message: "Achievement added successfully.",
            achievement
        });

    } catch (error) {
        console.error(
            "Create Achievement Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Failed to create achievement."
        });
    }
};

const getAchievements = async (req, res) => {
    try {
        const achievements =
            await Achievement
                .find()
                .sort({ date: -1 });

        return res.status(200).json({
            success: true,
            count: achievements.length,
            achievements
        });

    } catch (error) {
        console.error(
            "Get Achievements Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Failed to fetch achievements."
        });
    }
};

module.exports = {
    createAchievement,
    getAchievements
};