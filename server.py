import logging
import json
from flask import Flask, request
from telegram import Bot, Update
from telegram.ext import Application, ContextTypes, MessageHandler, filters


logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


BotToken = "5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU"


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    reaponse = await update.effective_message.reply_text(
        update.effective_message.text + ' from render'
    )


server = Flask(__name__)


@server.get('/')
async def Home():
    response = (await Bot(BotToken).send_message(5030058973, 'hello' + ' from render'))
    return 'ok', 200


@server.post("/webhook")
async def Webhook_handler():
    data = json.loads(request.stream.read().decode('utf-8'))
    application = Application.builder().token(BotToken).build()
    application.add_handler(MessageHandler(filters.TEXT, echo))
    async with application:
        await application.start()
        await application.process_update(Update.de_json(data=data, bot=application.bot))
        await application.stop()
    return 'ok', 200


if __name__ == "__main__":
   server.run(host='0.0.0.0', port=1337)
