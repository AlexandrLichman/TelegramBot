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
const regex = new RegExp('[а-яё]| |[0-9]', 'gi');
bot.on('message', function (msg) {
  const chatId = msg.chat.id;
  const cyrillicCustomMessage = msg.text.match(regex).join("");

  console.log(`cyrillicCustomMessage = ${cyrillicCustomMessage}`);
  bot.sendMessage(chatId, cyrillicCustomMessage)
//   if(typeof stringCustomMessage === 'string') {
      
  
// } else {
//   //bot.sendMessage(chatId, "Got invalid value");
// }

 });



// let checkCyrillic = (customLetter) => {
//   return regex.test(customLetter);
// }




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








// const patternRegEx = 2
// /([а-яё]+)\s([а-яё]+)/i;
// const regex = new RegExp('[а-я]', 'gi');
// const cyrillicCustomMessageToArray = "dsadas2dasы Вфы".split("");
// console.log(cyrillicCustomMessageToArray);
// let checkCyrillic = (customLetter) => {
//   console.log(`customLetter = ${customLetter}`);
//   console.log(`regex.test(customLetter) = ${regex.test(customLetter)}`);
//   return regex.test(customLetter);
// }

// const cyrillicCustomMessage = cyrillicCustomMessageToArray.filter(checkCyrillic)
// console.log(`cyrillicCustomMessage = ${cyrillicCustomMessage}`);

// replace(regex, "").trim()


// let test = "dsada s2dasы Вфы".replace(regex, "").trim()
// console.log(test);
// console.log(regex);