"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const TOKEN = "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0";
const PORT = process.env.PORT || 8080;
const bot = new node_telegram_bot_api_1.default(TOKEN);
const app = (0, express_1.default)();
app.use(express_1.default.json());
bot.setWebHook(`https://arkarwine-arkarwine13579.b4a.run/bot${TOKEN}`);
app.get("*", (req, res) => {
    res.end("200");
});
app.post(`/bot${TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
    res.end("200");
});
bot.on("message", (update) => {
    bot.sendMessage(update.chat.id, update.text);
});
app.listen(PORT, () => {
    console.log(`Starting Webhook on port ${PORT}`);
});
