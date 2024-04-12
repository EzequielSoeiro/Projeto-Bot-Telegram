import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Usuario ( id INTEGER PRIMARY KEY, hora date, mensagem varchar(255));')
    })
}