import { Router } from 'express';

const router = Router();

import { getAllPresidents, createPresident, getPresidentById, getPresidentsByCountryCode } from '../controllers/president.controller'

router.route('/')
    .get(getAllPresidents)
    .post(createPresident);

router.route('/country/:countryCode')
    .get(getPresidentsByCountryCode);
    
router.route('/:presidentId')
    .get(getPresidentById);

export default router