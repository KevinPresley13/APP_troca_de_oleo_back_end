import { Request, Response } from 'express';
import { Troca } from '../models/Trocas';
import { sequelize } from "../instances/mysql";


export const getAll = async (req: Request, res: Response) => {
    let trocaList = await Troca.findAll();
    res.json({trocaList})
};

export const add =async (req: Request, res: Response) => {
    if(req.body.nome_cliente){
        let newTroca = await Troca.create({
            nome_cliente: req.body.nome_cliente,
            telefone_cliente: req.body.telefone_cliente,
            nome_oleo: req.body.nome_oleo,
            odometro: req.body.odometro,
            data_troca: req.body.data_troca,
            proxima_troca: req.body.proxima_troca
        })
        res.json({ newTroca });
    }else{
        res.json({error: 'Erro ao criar nova troca!'})
    };
};
export const remove = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    let troca = await Troca.findByPk(id);
    if(troca){
        await troca.destroy();
        res.json({ msg: 'troca excluida com sucesso!'})
    }else{
        res.json({ msg: 'erro na exclusão!'})
    }
};


