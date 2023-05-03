"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const PORT = process.env.PORT || 8080;
const bot = new telegraf_1.Telegraf("5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0");
bot.on((0, filters_1.message)("text"), (ctx) => ctx.reply("Hello"));
bot.launch({
    webhook: {
        domain: "https://arkarwine-arkarwine13579.b4a.run/",
        port: PORT,
    },
});
