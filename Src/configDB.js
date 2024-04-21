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
      db.exec('CREATE TABLE IF NOT EXISTS usuarios ( id INTEGER PRIMARY KEY, email varchar(255));')
  })
}

export async function dbInsert(id, email){
  openDb().then(db=>{
      db.run('INSERT or IGNORE INTO usuarios (id, email) VALUES (?,?)', [id, email])
  })
}