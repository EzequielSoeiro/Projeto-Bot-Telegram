import { openDb } from "../configDB";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXIST Usuario ( id INTEGER PRIMARY KAY, hora date, mensagem varchar(255));')
    })
}