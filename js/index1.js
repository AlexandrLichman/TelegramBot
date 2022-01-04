"use strict";
var token = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM";
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, { polling: true });
bot.onText(/\/echo (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var resp = match[1];
    console.log("resp = ".concat(resp));
    bot.sendMessage(chatId, resp);
});
var regex = new RegExp('[а-яё]| |[0-9]', 'gi');
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var cyrillicCustomMessage = msg.text.match(regex).join("");
    console.log("cyrillicCustomMessage = ".concat(cyrillicCustomMessage));
    bot.sendMessage(chatId, cyrillicCustomMessage);
});
