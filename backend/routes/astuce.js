const express = require('express');
const router = express.Router();

const astuce = require('../controllers/astuce');
const token_auth = require('../middlewares/token_auth');


router.put('/add', token_auth, astuce.addAstuce);
router.get('/all', astuce.findAllAstuces);
router.get('/all/approved', astuce.findAllApprovedAstuces);
router.get('/show', astuce.getAstuce);
router.get('/:creator', token_auth, astuce.findAstucesByUser);
router.delete('/delete', token_auth, astuce.deleteAstuce);
router.post('/approve', token_auth, astuce.approveAstuce);
module.exports = router;