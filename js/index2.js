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
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var firstCharacter = "а";
    var lastCharacter = "я";
    if (typeof msg.text === 'string') {
        var customMessageFromStringToArray = msg.text.toLowerCase().split("");
        var returnArray = [];
        var latinCharacter = false;
        for (var i = 0; i < customMessageFromStringToArray.length; i++) {
            console.log("1 messageFromCustomer = ".concat(customMessageFromStringToArray[i]));
            if (lastCharacter >= customMessageFromStringToArray[i] && firstCharacter <= customMessageFromStringToArray[i]) {
                returnArray.push(customMessageFromStringToArray[i]);
            }
            else {
                latinCharacter = true;
            }
            console.log("2 messageFromCustomer = ".concat(customMessageFromStringToArray[i]));
        }
        var messageFromCustomerToString = returnArray.join("");
        var reverseText = returnArray.reverse().join("");
        if (returnArray[0] === undefined) {
            bot.sendMessage(chatId, "".concat(msg.text.toLowerCase(), " - there are no cyrillic letters in the message"));
        }
        else if (latinCharacter === true) {
            bot.sendMessage(chatId, "The customer message contains at least one latin character: ".concat(msg.text, ". There are ").concat(returnArray.length, " cyrillic letters \"").concat(messageFromCustomerToString, "\" and reverse version: ").concat(reverseText));
        }
        else {
            console.log('ReturnArrayToString');
            bot.sendMessage(chatId, "There are no latin characters in the customer message: ".concat(msg.text, ". There are ").concat(returnArray.length, " cyrillic letters \"").concat(messageFromCustomerToString, "\". and reverse version: ").concat(reverseText));
        }
    }
    else {
        bot.sendMessage(chatId, "Got invalid value");
    }
});
