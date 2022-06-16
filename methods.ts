import { Message } from 'node-telegram-bot-api/index'
import { regex } from "./regex";
const TelegramBot = require('node-telegram-bot-api');

export const checkCyrillic = (customMessage: string): string => {
  console.log(`function = ${customMessage}`);
  const customMessage1 = customMessage.match(regex);
  if (customMessage1 !== null) {
    customMessage = customMessage1.join("");
  }
  if (customMessage == '  ') {
    return `there is single space character`
  } else if (customMessage === null) {
    return `there is no valid character`
  }

  return customMessage;
}

export const getMessageType = (msg: Message) => {
  for (let i = 0; i < TelegramBot.messageTypes.length; i++) {
    if (msg.hasOwnProperty(TelegramBot.messageTypes[i])) {
      return TelegramBot.messageTypes[i];
    }
  }
}