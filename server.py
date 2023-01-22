import logging
import json
from flask import Flask, request
from telegram import Bot
from telegram.ext import Dispatcher, ContextTypes, MessageHandler, Filters

server = Flask(__name__)

BotToken = "5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU"


def echo(update: Update, context: ContextTypes):
    reaponse = update.effective_message.reply_text(
        update.effective_message.text
    )


@server.route("/")
def hello():
    response = (Bot(BotToken).send_message(5030058973, 'hello'))
    return "Hello World!"

@server.route("/webhook", methods=['POST'])
def Webhook_handler():
    data = request.stream.read().decode('utf-8')
    bot = Bot(BotToken)
    dp = Dispatcher(bot, None, workers=0, use_context=True)
    dp.add_handler(MessageHandler(Filters.text, echo))
    update = Update.de_json(json.loads(data), bot)
    dp.process_update(update)
    return 'ok', 200


if __name__ == "__main__":
   server.run(host='0.0.0.0', port=1337)
