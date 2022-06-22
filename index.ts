
import { checkCyrillic, getMessageType } from './methods'
import { Message } from 'node-telegram-bot-api/index'
import { listeners } from 'process';

const token: string = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM"

const TelegramBot = require('node-telegram-bot-api');

const youTube: string = "https://www.youtube.com/results?search_query=";

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg: Message) => {
  console.log("message: ", msg);
  const chatId = msg.chat.id;
  const msgType = getMessageType(msg);
  if (msg.text){
    bot.sendMessage(chatId, checkCyrillic(msg.text))
  } else {
    bot.sendMessage(chatId, `message type must be "text" instead of "${msgType}"`);
  }
}
)