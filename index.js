const TelegramBot = require("node-telegram-bot-api");
const BOT_TOKEN = "7207778430:AAHP1Mbr4c6vVMwi60o56BPchfYpZNB0EWA";
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    bot.sendMessage(
      chatId,
      `Assalom alekum ${msg.from.first_name}, 
Sizga murojat qilishlari uchun 
iltmos telefon raqamingizni jo'nating`,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Mahsulotni buyurtma berish",
                web_app: {
                  url: "https://express-clone24.netlify.app/",
                },
              },
            ],
          ],
        },
      }
    );
  }
});
