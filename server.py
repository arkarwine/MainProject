from pyrogram import Client, filters
from pyrogram.types import Message
from flask import Flask 
import logging
import threading

server = Flask(__name__)

@server.route('/')
def Home():
    return "Hello World !!!"

Bot = Client("userbot", "22444092", "bc6c9d84db95809f59bb96af90ccffd3")

logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


@Bot.on_message(filters.text)
async def echo(bot: Client, update: Message):
    await update.reply(
        update.text
    )


threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()


Bot.run()
