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

router.post("/boats", async (req, res) => {
    const {
        year_built,
        make,
        model,
        color,
        type,
        condition,
        price,
        description,
    } = req.body;

    try {
        const sql = `
      INSERT INTO for_sale.boat
      (year_built, make, model, color, type, \`condition\`, price, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            year_built,
            make,
            model,
            color,
            type,
            condition,
            price,
            description,
        ]);

        res.status(201).json({ message: "Boat created", boatId: result.insertId });
    } catch (err) {
        console.error("Error inserting boat:", err);
        res.status(500).json({ error: "Failed to create boat" });
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

// POST /api/cars
router.post("/cars", async (req, res) => {
    const {
        year_built,
        make,
        model,
        color,
        type,
        condition,
        price,
        description,
    } = req.body;

    try {
        const sql = `
      INSERT INTO for_sale.car
      (year_built, make, model, color, type, \`condition\`, price, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            year_built,
            make,
            model,
            color,
            type,
            condition,
            price,
            description,
        ]);

        res.status(201).json({ message: "Car created", carId: result.insertId });
    } catch (err) {
        console.error("Error inserting car:", err);
        res.status(500).json({ error: "Failed to create car" });
    }
});

// GET all motorcycles
router.get('/motorcycles', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM for_sale.motorcycle');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching motorcycles:', err);
        res.status(500).json({ error: 'Failed to fetch motorcycles' });
    }
});

// POST /api/motorcycles
router.post("/motorcycles", async (req, res) => {
    const {
        year_built,
        make,
        model,
        color,
        type,
        condition,
        price,
        description,
    } = req.body;

    try {
        const sql = `
      INSERT INTO for_sale.motorcycle
      (year_built, make, model, color, type, \`condition\`, price, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            year_built,
            make,
            model,
            color,
            type,
            condition,
            price,
            description,
        ]);

        res.status(201).json({ message: "Motorcycle created", motorcycleId: result.insertId });
    } catch (err) {
        console.error("Error inserting motorcycle:", err);
        res.status(500).json({ error: "Failed to create motorcycle" });
    }
});

// GET all books
router.get('/books', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM for_sale.book');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// POST /api/books
router.post("/books", async (req, res) => {
    const {
        title,
        author,
        publisher,
        published_date,
        genre,
        pages,
        price,
        description,
    } = req.body;

    try {
        const sql = `
      INSERT INTO for_sale.book
      (title, author, publisher, published_date, genre, pages, price, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            title,
            author,
            publisher,
            published_date,
            genre,
            pages,
            price,
            description,
        ]);

        res.status(201).json({ message: "Book created", bookId: result.insertId });
    } catch (err) {
        console.error("Error inserting book:", err);
        res.status(500).json({ error: "Failed to create book" });
    }
});

// GET all furniture
router.get('/furniture', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM for_sale.furniture');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching furniture:', err);
        res.status(500).json({ error: 'Failed to fetch furniture' });
    }
});

// POST /api/furniture
router.post("/furniture", async (req, res) => {
    const {
        name,
        type,
        material,
        color,
        dimensions,
        weight,
        price,
        condition,
    } = req.body;

    try {
        const sql = `
      INSERT INTO for_sale.furniture
      (name, type, material, color, dimensions, weight, price, \`condition\`)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const [result] = await db.execute(sql, [
            name,
            type,
            material,
            color,
            dimensions,
            weight,
            price,
            condition,
        ]);

        res.status(201).json({ message: "Furniture item created", id: result.insertId });
    } catch (err) {
        console.error("Error inserting furniture:", err);
        res.status(500).json({ error: "Failed to create furniture item" });
    }
});


module.exports = router;
