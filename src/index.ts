import express, { Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";

const TOKEN = "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0";
const PORT = process.env.PORT || 8080;

const bot = new TelegramBot(TOKEN);
const app = express();

app.use(express.json());

bot.setWebHook(`https://arkarwine-arkarwine13579.b4a.run/bot${TOKEN}`);

app.get("/", (req: Request, res: Response) => {
    console.log("Request !");
    bot.sendMessage(5030058973, "hi").then((res) => {
        console.log(res.text);
    });
    res.end("201");
});

app.post(`/bot${TOKEN}`, async (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
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
