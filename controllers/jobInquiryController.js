const JobInquiry =
    require("../models/JobInquiry");

const createJobInquiry = async (req, res) => {
    try {
        const {
            name,
            organizationName,
            jobName,
            address,
            officialEmail,
            offer,
            jobDetails
        } = req.body;

        if (
            !name ||
            !organizationName ||
            !jobName ||
            !address ||
            !officialEmail ||
            !offer ||
            !jobDetails
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const inquiry =
            await JobInquiry.create({
                name,
                organizationName,
                jobName,
                address,
                officialEmail,
                offer,
                jobDetails
            });

        return res.status(201).json({
            success: true,
            message:
                "Job opportunity sent successfully.",
            inquiry
        });

    } catch (error) {
        console.error(
            "Create Job Inquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to send job opportunity."
        });
    }
};

const getJobInquiries = async (req, res) => {
    try {
        const inquiries =
            await JobInquiry
                .find()
                .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: inquiries.length,
            inquiries
        });

    } catch (error) {
        console.error(
            "Get Job Inquiries Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch job inquiries."
        });
    }
};

module.exports = {
    createJobInquiry,
    getJobInquiries
};