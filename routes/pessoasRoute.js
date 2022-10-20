const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.post('/pessoas', PessoaController.createPeople);

module.exports = router
