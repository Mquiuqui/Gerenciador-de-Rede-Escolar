import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Tables } from './entity'
//import * as dotenv from 'dotenv'

//dotenv.config()

export const AppDataSource = new DataSource({
    
    type: 'mysql',
    port: 3306,
    host: "127.0.0.1",
    username: "root",
    password: "",
    database: "prjEscola",
    synchronize: false,
    entities: [...Tables],

})

