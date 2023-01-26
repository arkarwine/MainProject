from pyrogram import Client, filters
from pyrogram.types import Message
from flask import Flask
import threading
import logging


server = Flask(__name__)

@server.route("/")
def hello():
    return "Hello World !"


logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


Bot = Client(":memory:", "22444092", "bc6c9d84db95809f59bb96af90ccffd3", session_string="BQFWeDwAEH5b9-WgXfpyL_guf3NtdzMTHHcxulXPmftScIBodJ6kWbl8yXKb136juutCKoKXoImH2y9Al1HD5UhENnsdwntdwJ8DzXm_NLsp-XLAdr4TqmI13Rcs9wFHJp8C4Yvvo2LgHrZPt2nLPF5dHvYqAh0vTIyct0lZhmsmGs5FrYKQGvcVpF0v842td_oWLB9cobTl1uEcS2M3_SGitQcCcrCnVbeSQ9rvGX28TcuuH5DJfxclL1Er_GqiRaUMKQdXXG7GUNguTFOCkHFYCNjDB_jCZ1ONdXAAJdHQ62vvyad0WeuI93i_8LpfV8Q4jBgFz9nXq28gNqvbxVOYVshhKgAAAAFHQ0hsAA", in_memory=True)


@Bot.on_message(filters.private)
async def echo(_, update: Message):
    await update.reply(
        update.text
    )

if __name__ == "__main__":
    threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
    Bot.run()
