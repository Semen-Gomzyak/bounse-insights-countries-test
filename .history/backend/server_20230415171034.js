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

app.use('/api/countries', countriesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3001, () => console.log('server started on Port ' + 3000));