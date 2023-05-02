import express, { Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";

const TOKEN = "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0";
const PORT = process.env.PORT || 8080;

const bot = new TelegramBot(TOKEN);
const app = express();

app.use(express.json());

app.get("*", (req: Request, res: Response) => {
    res.end("200");
});

app.post(`/bot${TOKEN}`, (req: Request, res: Response) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
    res.end("200");
});

bot.on("message", (update: TelegramBot.Message) => {
    bot.sendMessage(update.chat.id, update.text);
});

app.listen(PORT, () => {
    console.log(`Starting Webhook on port ${PORT}`);
});
