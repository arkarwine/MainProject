from pyrogram import Client, filters
from pyrogram.types import Message
from pytgcalls import PyTgCalls, idle
from pytgcalls.types import AudioPiped
from flask import Flask
import os
import re
import threading
import logging
import asyncio
import threading


server = Flask(__name__)

@server.route('/')
def Home():
    return "Welcome home !!"


logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


Bot = Client(":memory:", "22444092", "bc6c9d84db95809f59bb96af90ccffd3", session_string="BQFWeDwAEH5b9-WgXfpyL_guf3NtdzMTHHcxulXPmftScIBodJ6kWbl8yXKb136juutCKoKXoImH2y9Al1HD5UhENnsdwntdwJ8DzXm_NLsp-XLAdr4TqmI13Rcs9wFHJp8C4Yvvo2LgHrZPt2nLPF5dHvYqAh0vTIyct0lZhmsmGs5FrYKQGvcVpF0v842td_oWLB9cobTl1uEcS2M3_SGitQcCcrCnVbeSQ9rvGX28TcuuH5DJfxclL1Er_GqiRaUMKQdXXG7GUNguTFOCkHFYCNjDB_jCZ1ONdXAAJdHQ62vvyad0WeuI93i_8LpfV8Q4jBgFz9nXq28gNqvbxVOYVshhKgAAAAFHQ0hsAA", in_memory=True)
app = PyTgCalls(Bot)


@Bot.on_message(filters.private)
async def echo(_, update: Message):
    term = update.text
    toEdit = await update.reply(
        'Starting...'
    )
    if re.findall(r'^(http|https):\/\/[^ "]+$', term):
        url = os.popen(f'python -m yt_dlp -g -f "bestaudio" "{term}"').read()
    else:
        url = os.popen(f'python -m yt_dlp -g -f "bestaudio" ytsearch1:"{term}"').read()
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
        "Started."
    )


if __name__ == "__main__":
    def main():
        app.start()
        idle()
    threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
    main()
