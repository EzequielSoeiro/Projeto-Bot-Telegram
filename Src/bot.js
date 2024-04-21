// import { openDb } from './configDB.js';
import { createTable } from './configDB.js';
import { dbInsert } from './configDB.js';

import TelegramBot from 'node-telegram-bot-api';

const token = '6753568802:AAFxkkRjzo680UozTyt-PVSE0V-tji74tDU';

const bot = new TelegramBot(token, {polling: true, request: {agentOptions: {rejectUnauthorized: false}}});

createTable();

const aguardandoEmail = false;

bot.on('message', (msg) => {

  const chatId = msg.chat.id;

  if(isHorarioFuncioamento){
    bot.sendMessage(chatId, 'Ola! Segue o link: https://faesa.br');   
  }
    else{s
      if (msg.text.includes('@')) {
        dbInsert(chatId, msg.text)
        bot.sendMessage(chatId, 'E-mail salvo com sucesso!')
      }else{  
        bot.sendMessage(chatId, 'Olá! O horário de funcionamento da empresa é de 09:00 as 18:00. Deixe seu e-mail e entraremos em contato assim que possível :)')
      }
    }  
  })

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isHorarioFuncioamento(){
  const time = new Date
  if(time.getHours < 9 && time.getHours > 18)
    return true
   
  return false
}