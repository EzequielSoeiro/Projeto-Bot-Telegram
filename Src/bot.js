// import { openDb } from './configDB.js';
import { createTable } from './configDB.js';
import { dbInsert } from './configDB.js';

import TelegramBot from 'node-telegram-bot-api';

const token = '7160841071:AAE9YJ8UCciYpM8kQ-kx6I7ZiWwcWBdvIMo';

const bot = new TelegramBot(token, {polling: true, request: {agentOptions: {rejectUnauthorized: false}}});

createTable();

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 


  bot.sendMessage(chatId, resp);
});

/**
 bot.on('polling_error', (error) => {
   console.log(error.code);  // => 'EFATAL'
 }); 
 */

bot.on('photo', async function(msg){
    const chatId = msg.chat.id;
    const photoId = msg.photo[msg.photo.length - 1].file_id;

    const photo = await bot.downloadFile(photoId, "./Imagens");


    bot.sendPhoto(chatId, photo, { caption: "Toma aí GOKU"})
})
  
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const mensagem = msg.text;

  dbInsert(chatId, mensagem)

  bot.sendMessage(chatId, mensagem);
});