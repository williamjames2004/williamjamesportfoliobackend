const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        eventName: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                "Symposium",
                "Hackathon",
                "Other"
            ]
        },

        organizer: {
            type: String,
            required: true,
            trim: true
        },

        date: {
            type: Date,
            required: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        image: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Achievement",
    achievementSchema
);