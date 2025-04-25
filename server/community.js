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

// GET /api/community?category=events
router.get('/community', async (req, res) => {
    try {
        const { category } = req.query;

        let query = 'SELECT * FROM community.community_listing';
        const values = [];

        if (category) {
            query += ' WHERE category = ?';
            values.push(category);
        }

        const [rows] = await db.query(query, values);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching community listings:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /api/community
router.post('/community', async (req, res) => {
    try {
        const {
            title,
            category,
            description,
            location,
            date_time,
            contact_email,
            contact_phone,
            organization,
            additional_info,
        } = req.body;

        const [result] = await db.query(
            `INSERT INTO community.community_listing 
       (title, category, description, location, date_time, contact_email, contact_phone, organization, additional_info)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                category,
                description,
                location,
                date_time,
                contact_email,
                contact_phone,
                organization,
                additional_info,
            ]
        );

        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error creating community listing:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
