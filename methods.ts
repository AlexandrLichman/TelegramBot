import { Message } from 'node-telegram-bot-api/index'
import { regex } from "./regex";
const TelegramBot = require('node-telegram-bot-api');

export const checkCyrillic = (customMessage: string): string => {
  console.log(`function checkCyrillic = ${customMessage}`);
  let customMessageArray = customMessage.match(regex);
  console.log(`function checkCyrillic customMessageArray = ${customMessageArray} and ${typeof customMessageArray}`);

  if (customMessageArray === null || customMessageArray.every(x => x === " ")) {
    return `there is no valid character`
  }
  return customMessageArray.join("");
}

export const getMessageType = (msg: Message) => {
  for (let i = 0; i < TelegramBot.messageTypes.length; i++) {
    if (msg.hasOwnProperty(TelegramBot.messageTypes[i])) {
      return TelegramBot.messageTypes[i];
    }
  }
}