// @ts-nocheck
import { checkCyrillic } from "./checkCyrillic"

const token = "5059059257:AAGQZ10O1pGON0QVoku-k6r2xy1e-Z5ywAM"

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
//const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  console.log(`resp = ${resp}`);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', function (msg) {
  const chatId = msg.chat.id;
  if (typeof msg.text === 'string') {
    console.log(msg.text);
    bot.sendMessage(chatId, checkCyrillic(msg.text))
  } else { bot.sendMessage(chatId, `Got invalid value`); }
});