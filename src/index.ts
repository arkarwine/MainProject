import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

const PORT = process.env.PORT || 8080;
const bot = new Telegraf("5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0");

bot.on(message("text"), (ctx) => ctx.reply("Hello"));

bot.launch({
    webhook: {
        domain: "https://arkarwine-arkarwine13579.b4a.run/",
        port: PORT,
    },
});
