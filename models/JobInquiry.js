const mongoose = require("mongoose");

const jobInquirySchema = new mongoose.Schema(
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
        jobName: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        officialEmail: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        offer: {
            type: String,
            required: true,
            trim: true
        },
        jobDetails: {
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
    mongoose.model("JobInquiry", jobInquirySchema);