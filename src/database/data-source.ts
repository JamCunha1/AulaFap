//Importação do reflect metadata
import "reflect-metadata";

//Importação do data source 
import { DataSource } from "typeorm";
import { cliente } from "../app/cliente";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "agenda",
    synchronize: true,
    logging: false,
    entities: [cliente],
})