import json
import threading
from flask import Flask, request
from telegram import Bot, Update
from telegram.ext import Application, ContextTypes, MessageHandler, filters


server = Flask(__name__)


BotToken = "5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU"


async def echo(update: Update, context: ContextTypes):
    reaponse = await update.effective_message.reply_text(
        update.effective_message.text
    )


@server.route("/")
def hello():
    return "Hello World !"


def main():
    APP = Application.builder().token(BotToken).build()
    
    APP.add_handler(MessageHandler(filters.TEXT, echo))

    APP.run_polling()


if __name__ == "__main__":
    threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
    main()
