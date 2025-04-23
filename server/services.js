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


router.get('/services', async (req, res) => {
    const { category } = req.query;

    try {
        let query = 'SELECT * FROM services.service_listing';
        let params = [];

        if (category) {
            query += ' WHERE category = ?';
            params.push(category);
        }

        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching services' });
    }
});

router.post('/services', async (req, res) => {
    const {
        title,
        category,
        provider_name,
        location,
        price,
        description,
        contact_email,
        contact_phone,
        available_days,
        experience_years,
        certifications,
    } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO services.service_listing 
        (title, category, provider_name, location, price, description, contact_email, contact_phone, available_days, experience_years, certifications)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                category,
                provider_name,
                location,
                price,
                description,
                contact_email,
                contact_phone,
                available_days,
                experience_years,
                certifications,
            ]
        );

        res.status(201).json({ message: 'Service created', id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating service' });
    }
});



module.exports = router;