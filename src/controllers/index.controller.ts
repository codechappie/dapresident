import { Request, Response } from 'express';

export function indexWelcome(req: Request, res: Response): Response {
    return res.json('Welcome ti mi API')
}

