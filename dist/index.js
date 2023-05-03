"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/", (req, res) => {
    console.log("Request !");
    bot.sendMessage(5030058973, "hi").then((res) => {
        console.log(res.text);
    });
    res.end("201");
});
app.post(`/bot${TOKEN}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    bot.processUpdate(req.body);
    res.sendStatus(200);
    res.end("200");
}));
bot.on("message", (update) => {
    bot.sendMessage(update.chat.id, update.text);
});
app.listen(PORT, () => {
    console.log(`Starting Webhook on port ${PORT}`);
});
