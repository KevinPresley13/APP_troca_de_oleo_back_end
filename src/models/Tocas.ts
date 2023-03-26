import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface OleoInstance extends Model{
    id: number,
    nome_cliente: string,
    telefone_cliente: string,
    nome_oleo: string,
    odometro: number,
    data_troca: string,
    proxima_troca:string
};