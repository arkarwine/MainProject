from pyrogram import Client, filters
from pyrogram.types import Message
from pyrogram.enums import ChatType
from pytgcalls import PyTgCalls, idle
from pytgcalls.types import AudioPiped
from flask import Flask
import requests
import threading
import re
import logging
import asyncio
import threading
import json


server = Flask(__name__)

@server.route('/')
def Home():
    return "Welcome home !!"


logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


Bot = Client(":memory:", "22444092", "bc6c9d84db95809f59bb96af90ccffd3", session_string="BQFWeDwAoAHBKZ7RqNk8n4DtvrEbXwAL4d96S2mYGig5odNhm5pehM_R88K5tQIkFCj61usu0BDMwDfJvYSNP4TzgcHVYfHFMY-NaRMCIK8dUkVrA8brWGQF31hGhli80O2uOJ7GQh__H9PT3gNbPDEw_YeTdaYtF7ZfYeusuyqXDHsYKHRxBjKxTw7ngObvajK9bUPi5Fib8RbhIet8kXYyRzfGR2L_oyOQkYD-FrR6PEUB58socI-utDvrRJOT38MiMjuHKG61loduIwU_TrQUvba8ZWHoeDZwswxMi2fOkxF2R7nJ-ZP9XjXwLjzU1H9h3JBMc9yQV_ctkMUJcJ_tx9UC5QAAAAFHQ0hsAA",in_memory=True)
app = PyTgCalls(Bot)


@Bot.on_message(filters.create(lambda _, client, update: all([update.chat.type==ChatType.PRIVATE, update.via_bot, False if not update.text else re.findall(r'.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*', update.text)])))
async def echo(bot: Client, update: Message):
    try:
        term = re.findall(r'.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*', update.text)[0]
        toEdit = await update.reply(
            "ခဏစောင့်ပါ..."
        )

        url = "https://ytstream-download-youtube-videos.p.rapidapi.com/dl"

        querystring = {"id":term}

        headers = {
            "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com"
        }

        response = requests.request("GET", url, headers=headers, params=querystring)

        url = json.loads(response.text)['formats'][-1]['url']

        try:
            await app.join_group_call(
                -1001787879635,
                AudioPiped(
                    url,
                )
            )
        except:
            await app.change_stream(
                -1001787879635,
                AudioPiped(
                    url,
                )
            )
        await toEdit.edit(
            f"Streaming {json.loads(response.text)['title']}"
        )
    except Exception as e:
        await toEdit.edit(
            e
        )


if __name__ == "__main__":
    def main():
        app.start()
        idle()
    threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
    main()

