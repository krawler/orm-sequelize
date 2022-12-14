const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/:id', PessoaController.getOne);
router.post('/pessoas', PessoaController.createPeople);

module.exports = router
