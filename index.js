const TOKEN = "7274465971:AAHbodjo6mDZTc3zP7MiDUnBaU266TF2gVo";

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  console.log(msg);
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
