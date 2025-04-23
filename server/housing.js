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

router.get('/apartments', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM housing.apartment_house where property_type = 'APT'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching apartments:', err);
        res.status(500).json({ error: 'Failed to fetch apartments' });
    }
});

router.get('/houses', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM housing.apartment_house where property_type = 'HOUSE'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching houses:', err);
        res.status(500).json({ error: 'Failed to fetch houses' });
    }
});

router.get('/vacation', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM housing.apartment_house where property_type = 'VAC'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching houses:', err);
        res.status(500).json({ error: 'Failed to fetch houses' });
    }
});

router.get('/townhomes', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM housing.apartment_house where property_type = 'TOW'");
        res.json(rows);
    } catch (err) {
        console.error('Error fetching houses:', err);
        res.status(500).json({ error: 'Failed to fetch houses' });
    }
});

// POST endpoint to create a new apartment/house listing
router.post('/apartments', async (req, res) => {
    const {
        title,
        address,
        country,
        bedrooms,
        bathrooms,
        square_feet,
        lot_size,
        year_built,
        property_type,
        price,
    } = req.body;

    try {
        const [result] = await db.execute(
            `INSERT INTO housing.apartment_house
        (title, address, country, bedrooms, bathrooms, square_feet, lot_size, year_built, property_type, price) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                address,
                country,
                bedrooms,
                bathrooms,
                square_feet,
                lot_size,
                year_built,
                property_type,
                price,
            ]
        );

        res.status(201).json({ message: 'Apartment/House created', id: result.insertId });
    } catch (err) {
        console.error('Error inserting apartment/house:', err);
        res.status(500).json({ message: 'Failed to create apartment/house listing' });
    }
});


module.exports = router;
