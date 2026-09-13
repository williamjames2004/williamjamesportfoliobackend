const Certification = require("../models/Certification");

const createCertification = async (req, res) => {
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

        const certification =
            await Certification.create({
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
            message: "Certification added successfully.",
            certification
        });

    } catch (error) {
        console.error(
            "Create Certification Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Failed to create certification."
        });
    }
};

const getCertifications = async (req, res) => {
    try {
        const certifications =
            await Certification
                .find()
                .sort({ date: -1 });

        return res.status(200).json({
            success: true,
            count: certifications.length,
            certifications
        });

    } catch (error) {
        console.error(
            "Get Certifications Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Failed to fetch certifications."
        });
    }
};

module.exports = {
    createCertification,
    getCertifications
};