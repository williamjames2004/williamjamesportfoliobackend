const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                "Web Projects",
                "Flutter Projects",
                "AI Projects"
            ]
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            default: null
        },

        tools: {
            type: [String],
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

module.exports = mongoose.model("Project", projectSchema);