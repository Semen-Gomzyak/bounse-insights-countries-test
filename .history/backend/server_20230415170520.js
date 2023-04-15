const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { PORT } = process.env;
console.log(PORT);
const app = express();

app.use(express.json());
app.use(cors);

app.listen(3000, () => console.log('server started on Port ' + 3000));