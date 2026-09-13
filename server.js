const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const projectRoutes =
    require("./routes/projectRoutes");

const certificationRoutes =
    require("./routes/certificationRoutes");

const achievementRoutes =
    require("./routes/achievementRoutes");

const jobInquiryRoutes =
    require("./routes/jobInquiryRoutes");

const projectInquiryRoutes =
    require("./routes/projectInquiryRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

/* Backend Status */
app.get("/active", (req, res) => {
    res.status(200).json({
        success: true
    });
});

/* Projects */
app.use(
    "/projects",
    projectRoutes
);

/* Certifications */
app.use(
    "/certifications",
    certificationRoutes
);

/* Achievements */
app.use(
    "/achievements",
    achievementRoutes
);
app.use(
    "/api/job-inquiries",
    jobInquiryRoutes
);

app.use(
    "/api/project-inquiries",
    projectInquiryRoutes
);

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});