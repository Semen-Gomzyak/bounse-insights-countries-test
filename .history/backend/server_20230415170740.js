const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
dotenv.config();

const app = express();

const countriesRouter = require('./routes/api/countries');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));

app.use(express.json());
app.use(cors);

app.listen(3000, () => console.log('server started on Port ' + 3000));