// @ts-nocheck
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
  const firstCharacter = "а";
  const lastCharacter = "я";

  if (typeof msg.text === 'string') {
    const customMessageFromStringToArray = msg.text.toLowerCase().split("");
    let returnArray = []
    let latinCharacter = false;

    for (let i = 0; i < customMessageFromStringToArray.length; i++) {
      console.log(`1 messageFromCustomer = ${customMessageFromStringToArray[i]}`);

      if (lastCharacter >= customMessageFromStringToArray[i] && firstCharacter <= customMessageFromStringToArray[i]) {
        returnArray.push(customMessageFromStringToArray[i]);
      }else {latinCharacter = true}
      console.log(`2 messageFromCustomer = ${customMessageFromStringToArray[i]}`);
    }
    const messageFromCustomerToString = returnArray.join("");
    const reverseText = returnArray.reverse().join("");
    
    if (returnArray[0] === undefined) {
      bot.sendMessage(chatId, `${msg.text.toLowerCase()} - there are no cyrillic letters in the message`);
    } else if (latinCharacter === true){
      bot.sendMessage(chatId, `The customer message contains at least one latin character: ${msg.text}. There are ${returnArray.length} cyrillic letters "${messageFromCustomerToString}" and reverse version: ${reverseText}`);
    }else {

      console.log('ReturnArrayToString');
      bot.sendMessage(chatId, `There are no latin characters in the customer message: ${msg.text}. There are ${returnArray.length} cyrillic letters "${messageFromCustomerToString}". and reverse version: ${reverseText}`);
    }
  } else { bot.sendMessage(chatId, `Got invalid value`); }

}


);




//trash
  // if (typeof msg.text === 'string' || msg.text.toString().toLowerCase().includes("привет")) {
  //    bot.sendMessage(msg.chat.id, messageFromCustomer);
  // }|| msg.text.toString().toLowerCase().includes("привет")
    // console.log(`messageFromCustomer = ${messageFromCustomer}`);
  // msg.
  //   // send a message to the chat acknowledging receipt of their message
  //   bot.sendMessage(chatId, 'dasdasdasdasd');
  // var Hi = "hi";
  // if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
  //   bot.sendMessage(msg.chat.id, "Hello dear user");
    // const messageFromCustomer = msg.text.split("").reverse().join("");