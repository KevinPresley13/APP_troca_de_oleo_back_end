import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface OleoInstance extends Model{
    id: number,
    nome_cliente: string,
    telefone_cliente: string,
    nome_oleo: string,
    filtro: string,
    odometro: string,
    data_troca: string,
    proxima_troca:string
};

export const Troca = sequelize.define<OleoInstance>('Troca',{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone_cliente: {
        type: DataTypes.STRING,
    },
    nome_oleo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filtro:{
        type: DataTypes.STRING
    },
    odometro: {
        type: DataTypes.STRING
    },
    data_troca: {
        type: DataTypes.DATE,
        allowNull: false
    },
    proxima_troca: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'troca_de_oleo',
    timestamps: false
});''