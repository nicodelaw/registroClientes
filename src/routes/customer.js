const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customerControllers');

router.get('/', customerControllers.list);
router.post('/add', customerControllers.save);
router.get('/delete/:id', customerControllers.delete);
router.get('/update/:id', customerControllers.edit);
router.post('/update/:id', customerControllers.update);
router.post('/addpqrs', customerControllers.savepqrs);

module.exports = router;