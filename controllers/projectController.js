const Project = require("../models/Project");


/* ==================== CREATE PROJECT ==================== */

const createProject = async (req, res) => {

    try {

        const {
            name,
            category,
            startDate,
            endDate,
            tools,
            description,
            image
        } = req.body;


        /* ==================== VALIDATION ==================== */

        if (
            !name ||
            !category ||
            !startDate ||
            !tools ||
            !description ||
            !image
        ) {

            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });

        }


        if (!Array.isArray(tools) || tools.length === 0) {

            return res.status(400).json({
                success: false,
                message: "At least one tool is required."
            });

        }


        /* ==================== CREATE ==================== */

        const project = await Project.create({
            name,
            category,
            startDate,
            endDate: endDate || null,
            tools,
            description,
            image
        });


        return res.status(201).json({
            success: true,
            message: "Project added successfully.",
            project
        });

    } catch (error) {

        console.error("Create Project Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create project."
        });

    }

};


/* ==================== GET ALL PROJECTS ==================== */

const getProjects = async (req, res) => {

    try {

        const projects = await Project
            .find()
            .sort({ startDate: -1 });


        return res.status(200).json({
            success: true,
            count: projects.length,
            projects
        });

    } catch (error) {

        console.error("Get Projects Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch projects."
        });

    }

};


module.exports = {
    createProject,
    getProjects
};