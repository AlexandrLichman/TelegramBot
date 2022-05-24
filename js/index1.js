"use strict";
const token = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM";
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    console.log(`resp = ${resp}`);
    bot.sendMessage(chatId, resp);
});
const regex = new RegExp('[а-яё]| |[0-9]', 'gi');
bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    const cyrillicCustomMessage = msg.text.match(regex).join("");
    console.log(`cyrillicCustomMessage = ${cyrillicCustomMessage}`);
    bot.sendMessage(chatId, cyrillicCustomMessage);
});
