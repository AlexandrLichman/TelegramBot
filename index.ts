
import { checkCyrillic, getMessageType } from './methods'
import { Message } from 'node-telegram-bot-api/index'
import { listeners } from 'process';

const token: string = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM"

const TelegramBot = require('node-telegram-bot-api');

const youTube: string = "https://www.youtube.com/results?search_query=";

const bot = new TelegramBot(token, { polling: true });

console.log(`--->>> ${bot.message}`);


bot.onText(/\/youtube (.+)/, (msg: Message, match: string[]) => {
  const chatId: number = msg.chat.id;
  const resp = match[1];
  console.log(`resp = ${resp} match: ${match} & ${match.length}`);
  bot.sendMessage(chatId, `${youTube}${resp}`);
});

bot.on('message', (msg: Message) => {
  const chatId = msg.chat.id;
  const msgType = getMessageType(msg)
  console.log(`msgType: ${msgType}`);
  if (msgType === 'text') {
    console.log(msg);
    if (msg.text) {
      bot.sendMessage(chatId, checkCyrillic(msg.text))
    }
  } else { bot.sendMessage(chatId, `message type must be "text" instead of "${msgType}"`); }
});


bot.on('sticker', (msg: Message) => {
  const chatId: number = msg.chat.id;
  const msgType = getMessageType(msg)
  console.log(`${msgType}`);
  bot.sendMessage(chatId, msgType);
})


