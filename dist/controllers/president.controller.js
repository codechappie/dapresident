"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresident = exports.getPresidentById = exports.getPresidentsByCountryCode = exports.getAllPresidents = void 0;
const database_1 = require("../database");
function getAllPresidents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const presidents = yield conn.query('SELECT * FROM presidents');
        return res.json(presidents[0]);
    });
}
exports.getAllPresidents = getAllPresidents;
function getPresidentsByCountryCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const countryCode = (req.params.countryCode).toUpperCase();
        const conn = yield database_1.connect();
        const presidents = yield conn.query('SELECT * FROM presidents WHERE country_code = ?', [countryCode]);
        return res.json(presidents[0]);
    });
}
exports.getPresidentsByCountryCode = getPresidentsByCountryCode;
function getPresidentById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const presidentId = req.params.presidentId;
        const conn = yield database_1.connect();
        const presidents = yield conn.query('SELECT * FROM presidents WHERE id = ?', [presidentId]);
        return res.json(presidents[0]);
    });
}
exports.getPresidentById = getPresidentById;
// export async function getPresident(req: Request, res: Response): Promise<Response> {
//     const idPresident = req.params.presidentId;
//     const countryPresident = req.params.country;
//     console.log(idPresident, countryPresident);
//     const conn = await connect();
//     const presidents = await conn.query('SELECT * FROM presidents WHERE id = ? AND country = ?', [idPresident, countryPresident]);
//     return res.json(presidents[0]);
// }
function createPresident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPresident = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO presidents SET ?', [newPresident]);
        return res.json({
            "message": "President created successfully"
        });
    });
}
exports.createPresident = createPresident;
