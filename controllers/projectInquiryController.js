const ProjectInquiry =
    require("../models/ProjectInquiry");

const createProjectInquiry = async (req, res) => {
    try {
        const {
            name,
            organizationName,
            address,
            email,
            projectCategory,
            projectDescription
        } = req.body;

        if (
            !name ||
            !organizationName ||
            !address ||
            !email ||
            !projectCategory ||
            !projectDescription
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const inquiry =
            await ProjectInquiry.create({
                name,
                organizationName,
                address,
                email,
                projectCategory,
                projectDescription
            });

        return res.status(201).json({
            success: true,
            message:
                "Project enquiry sent successfully.",
            inquiry
        });

    } catch (error) {
        console.error(
            "Create Project Inquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to send project enquiry."
        });
    }
};

const getProjectInquiries = async (req, res) => {
    try {
        const inquiries =
            await ProjectInquiry
                .find()
                .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: inquiries.length,
            inquiries
        });

    } catch (error) {
        console.error(
            "Get Project Inquiries Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch project inquiries."
        });
    }
};

module.exports = {
    createProjectInquiry,
    getProjectInquiries
};