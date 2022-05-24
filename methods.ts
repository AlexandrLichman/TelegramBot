// @ts-nocheck
import {regex} from "./regex";
const TelegramBot = require('node-telegram-bot-api');

export const checkCyrillic = (customMessage) => {
  console.log(`function = ${customMessage}`);
  customMessage = customMessage.match(regex)
  if (customMessage === null){
    return `there is no valid character`
  }

  return customMessage.join("");
}

export const getMessageType = (msg) => {
  for (let i = 0; i < TelegramBot.messageTypes.length; i++) {
    if (msg.hasOwnProperty(TelegramBot.messageTypes[i])) {
      return TelegramBot.messageTypes[i];
    }
  }
}