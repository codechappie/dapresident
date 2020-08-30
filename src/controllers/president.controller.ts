import { Request, Response } from 'express';
import { President } from '../interfaces/president.interface'
import { connect } from '../database'

export async function getAllPresidents(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const presidents = await conn.query('SELECT * FROM presidents');
    return res.json(presidents[0]);
}

export async function getPresidentsByCountryCode(req: Request, res: Response): Promise<Response> {
    const countryCode = (req.params.countryCode).toUpperCase();
    const conn = await connect();
    const presidents = await conn.query('SELECT * FROM presidents WHERE country_code = ?', [countryCode]);
    return res.json(presidents[0]);
}

export async function getPresidentById(req: Request, res: Response): Promise<Response> {
    const presidentId = req.params.presidentId;
    const conn = await connect();
    const presidents = await conn.query('SELECT * FROM presidents WHERE id = ?', [presidentId]);
    return res.json(presidents[0]);
}

// export async function getPresident(req: Request, res: Response): Promise<Response> {
//     const idPresident = req.params.presidentId;
//     const countryPresident = req.params.country;
//     console.log(idPresident, countryPresident);
//     const conn = await connect();
//     const presidents = await conn.query('SELECT * FROM presidents WHERE id = ? AND country = ?', [idPresident, countryPresident]);
//     return res.json(presidents[0]);
// }

export async function createPresident(req: Request, res: Response): Promise<Response> {
    const newPresident: President = req.body;
    const conn = await connect();
    
    await conn.query('INSERT INTO presidents SET ?', [newPresident]);
    return res.json({
        "message": "President created successfully"
    });
}