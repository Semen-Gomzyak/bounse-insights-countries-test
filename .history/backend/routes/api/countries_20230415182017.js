const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const router = express.Router();

router.get('/', tryCatchWrapper
});

module.exports = router;