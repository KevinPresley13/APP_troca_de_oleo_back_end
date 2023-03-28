import { Request, Response } from 'express';
import { Troca } from '../models/Trocas';
import { sequelize } from "../instances/mysql";
export const getAll = async (req: Request, res: Response) => {
    let trocaList = await Troca.findAll();
    res.json({trocaList})
}
