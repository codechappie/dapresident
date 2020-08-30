"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const president_controller_1 = require("../controllers/president.controller");
router.route('/')
    .get(president_controller_1.getAllPresidents)
    .post(president_controller_1.createPresident);
router.route('/country/:countryCode')
    .get(president_controller_1.getPresidentsByCountryCode);
router.route('/:presidentId')
    .get(president_controller_1.getPresidentById);
exports.default = router;
