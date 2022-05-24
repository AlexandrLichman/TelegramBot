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
bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    const firstCharacter = "а";
    const lastCharacter = "я";
    if (typeof msg.text === 'string') {
        const customMessageFromStringToArray = msg.text.toLowerCase().split("");
        let returnArray = [];
        let latinCharacter = false;
        for (let i = 0; i < customMessageFromStringToArray.length; i++) {
            console.log(`1 messageFromCustomer = ${customMessageFromStringToArray[i]}`);
            if (lastCharacter >= customMessageFromStringToArray[i] && firstCharacter <= customMessageFromStringToArray[i]) {
                returnArray.push(customMessageFromStringToArray[i]);
            }
            else {
                latinCharacter = true;
            }
            console.log(`2 messageFromCustomer = ${customMessageFromStringToArray[i]}`);
        }
        const messageFromCustomerToString = returnArray.join("");
        const reverseText = returnArray.reverse().join("");
        if (returnArray[0] === undefined) {
            bot.sendMessage(chatId, `${msg.text.toLowerCase()} - there are no cyrillic letters in the message`);
        }
        else if (latinCharacter === true) {
            bot.sendMessage(chatId, `The customer message contains at least one latin character: ${msg.text}. There are ${returnArray.length} cyrillic letters "${messageFromCustomerToString}" and reverse version: ${reverseText}`);
        }
        else {
            console.log('ReturnArrayToString');
            bot.sendMessage(chatId, `There are no latin characters in the customer message: ${msg.text}. There are ${returnArray.length} cyrillic letters "${messageFromCustomerToString}". and reverse version: ${reverseText}`);
        }
    }
    else {
        bot.sendMessage(chatId, `Got invalid value`);
    }
});
