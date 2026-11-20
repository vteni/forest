import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("9255966631:AAEO9HnoG1BBleb_oKpOGX2N9A9UW5c5cdY"); // 1. Вставь токен

bot.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard().game("Играть");
  // 2. Вставь short_name, который дал BotFather
  await ctx.replyWithGame("RunForestBot", { reply_markup: keyboard });
});

bot.on("callback_query:game_short_name", async (ctx) => {
  // 3. Вставь ссылку с GitHub Pages
  await ctx.answerCallbackQuery({ url: "https://vteni.github.io/forest/" });
});

bot.start();