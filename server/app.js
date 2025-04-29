console.log('Server starting...');
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const forSaleRoutes = require('./for-sale');
const jobsRoutes = require("./job");
const housingRoutes = require("./housing");
const servicesRoutes = require("./services");
const communityRoutes = require("./community");

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use after runing npm run build to serve react app - not needed until deployment
app.use(express.static(path.join(__dirname, 'dist')));

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();

// FOR SALE
app.use('/api', forSaleRoutes);
app.use('/api', jobsRoutes);
app.use('/api', housingRoutes);
app.use('/api', servicesRoutes);
app.use('/api', communityRoutes);

// Login User
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const [rows] = await db.query('SELECT * FROM photo_gallery.user WHERE username = ?', [username]);
        if (rows.length === 0 || rows[0].password !== password) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        res.json({ message: 'Login successful', user_id: rows[0].id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Check if the username already exists
        const [rows] = await db.query('SELECT * FROM photo_gallery.user WHERE username = ?', [username]);
        if (rows.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Insert user into the database with the plain password
        const userId = uuidv4();
        const createdDt = new Date();
        const modifiedDt = createdDt;

        const sql = `
            INSERT INTO photo_gallery.user (id, username, password, created_dt, modified_dt)
            VALUES (?, ?, ?, ?, ?)`;
        await db.query(sql, [userId, username, password, createdDt, modifiedDt]);

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
