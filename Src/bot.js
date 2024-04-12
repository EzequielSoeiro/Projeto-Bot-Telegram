// import { openDb } from './configDB.js';
import { createTable } from './controler/usuario.js';

import TelegramBot from 'node-telegram-bot-api';

const token = '6868543118:AAFEdwWo1LsZpZnvNtNQjFxesz9a8b-wMo0';

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

  bot.sendMessage(chatId, mensagem);
});