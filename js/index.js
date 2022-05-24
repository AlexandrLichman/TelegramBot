"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkCyrillic_1 = require("./checkCyrillic");
const token = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM";
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });
console.log(TelegramBot.messageTypes());
bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    console.log(`resp = ${resp}`);
    bot.sendMessage(chatId, resp);
});
bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    if (typeof msg.text === 'string') {
        console.log(msg.text);
        bot.sendMessage(chatId, (0, checkCyrillic_1.checkCyrillic)(msg.text));
    }
    else {
        bot.sendMessage(chatId, `Got invalid value`);
    }
});
