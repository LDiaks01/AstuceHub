const express = require('express');
const router = express.Router();

const token_auth = require('../middlewares/token_auth');
const fileLoader = require('../middlewares/add_file');
const users = require('../controllers/users');

router.post('/bann', token_auth, users.bannUser);
router.post('/debann', token_auth, users.deBannUser);
router.post('/makeadmin', token_auth, users.makeAdmin);
router.get('/all', token_auth, users.getAllUsers);

module.exports = router;