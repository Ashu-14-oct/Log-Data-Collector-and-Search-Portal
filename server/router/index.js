const express = require('express');
const router = express.Router();
const logsController = require('../controller/log.controller');

router.get('/logs', logsController.search);
router.post('/log', logsController.createLogs);


module.exports = router;