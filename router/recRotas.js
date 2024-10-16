import express from 'express';
const router = express.Router();

import { addVaga, listaVaga, infoVaga, attVaga, apagaVaga, listaCargo, localVaga } from '../controller/recController.js';

router.post('/vagas', addVaga);
router.get('/vagas', listaVaga);
router.get('/vagas/:id', infoVaga);
router.put('/vagas/:id', attVaga);
router.delete('/vagas/:id', apagaVaga);
router.get('/cargo/:cargo', listaCargo);
router.get('/localizacao/:cidade', localVaga);

export default router;