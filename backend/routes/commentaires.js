const express = require('express');
const router = express.Router();
const commentaires = require('../controllers/commentaires');
const token_auth = require('../middlewares/token_auth');


router.post('/add', commentaires.addComment);
router.get('/read', token_auth, commentaires.readComment);
router.delete('/delete',token_auth, commentaires.deleteComment);
module.exports = router;