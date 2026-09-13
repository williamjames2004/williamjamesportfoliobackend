const mongoose = require("mongoose");

const projectInquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        organizationName: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        projectCategory: {
            type: String,
            required: true,
            enum: [
                "Website",
                "Software",
                "AI",
                "Others"
            ]
        },
        projectDescription: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: [
                "New",
                "Contacted",
                "In Progress",
                "Closed"
            ],
            default: "New"
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.model(
        "ProjectInquiry",
        projectInquirySchema
    );