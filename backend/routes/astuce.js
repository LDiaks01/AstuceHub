const express = require('express');
const router = express.Router();

const astuce = require('../controllers/astuce');
const token_auth = require('../middlewares/token_auth');
const fileLoader = require('../middlewares/add_file')


router.put('/add', token_auth, fileLoader, astuce.addAstuce);
router.get('/all', token_auth, astuce.findAllAstuces);
router.get('/all/approved', astuce.findAllApprovedAstuces);
router.get('/show', astuce.getAstuce);
router.get('/:creator', token_auth, astuce.findAstucesByUser);
router.delete('/delete', token_auth, astuce.deleteAstuce);
router.post('/approve', token_auth, astuce.approveAstuce);
module.exports = router;