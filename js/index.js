"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkCyrillic_1 = require("./checkCyrillic");
var token = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM";
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, { polling: true });
bot.onText(/\/echo (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var resp = match[1];
    console.log("resp = ".concat(resp));
    bot.sendMessage(chatId, resp);
});
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    if (typeof msg.text === 'string') {
        console.log(msg.text);
        bot.sendMessage(chatId, (0, checkCyrillic_1.checkCyrillic)(msg.text));
    }
    else {
        bot.sendMessage(chatId, "Got invalid value");
    }
});
