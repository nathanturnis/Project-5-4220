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

// GET all boats
router.get('/boats', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM for_sale.boat');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching boats:', err);
        res.status(500).json({ error: 'Failed to fetch boats' });
    }
});

// GET all cars
router.get('/cars', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM for_sale.car');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching cars:', err);
        res.status(500).json({ error: 'Failed to fetch cars' });
    }
});

module.exports = router;
