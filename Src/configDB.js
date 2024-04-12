import  sqlite3  from  'sqlite3' 
import  {  open  }  from  'sqlite'

// você teria que importar/invocar isso em outro arquivo 
export  async  function  openDb  ( )  { 
  return  open ( { 
    filename : './database/database.db' , 
    driver : sqlite3 . Database 
  } ) 
}

export async function createTable(){
  openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS Registros_chat ( id_user INTEGER, mensagem varchar(255));')
  })
}

export async function dbInsert(id, mensagem){
  openDb().then(db=>{
      db.run('INSERT or IGNORE INTO Registros_chat (id_user, mensagem) VALUES (?,?)', [id, mensagem])
  })
}