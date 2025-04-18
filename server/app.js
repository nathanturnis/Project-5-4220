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

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use after runing npm build to server react app - not needed until deployment
//app.use(express.static(path.join(__dirname, '../client/dist')));

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
