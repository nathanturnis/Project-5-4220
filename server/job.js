const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

// Setup database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();

router.get('/jobs/web', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM jobs.job_listing where job_type = 'WEB'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

router.get('/jobs/education', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM jobs.job_listing where job_type = 'EDU'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

router.get('/jobs/customer-service', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM jobs.job_listing where job_type = 'CUS'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

router.get('/jobs/retail', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM jobs.job_listing where job_type = 'RET'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

router.get('/jobs/legal', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM jobs.job_listing where job_type = 'LAW'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

router.post("/jobs", async (req, res) => {
    const {
        title,
        company,
        location,
        employment_type,
        salary,
        description,
        level,
        job_type,
    } = req.body;

    try {
        const sql = `
      INSERT INTO jobs.job_listing
      (title, company, location, employment_type, salary, description, level, job_type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            title,
            company,
            location,
            employment_type,
            salary,
            description,
            level,
            job_type,
        ]);

        res.status(201).json({ message: "Job created", jobId: result.insertId });
    } catch (err) {
        console.error("Error inserting job:", err);
        res.status(500).json({ error: "Failed to create job" });
    }
});

module.exports = router;