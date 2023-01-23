from pyrogram import Client, filters
from pyrogram.types import Message
import logging

Bot = Client("userbot", "22444092", "bc6c9d84db95809f59bb96af90ccffd3")

logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


@Bot.on_message(filters.text)
async def echo(bot: Client, update: Message):
    await update.reply(
        update.text
    )


Bot.run()
