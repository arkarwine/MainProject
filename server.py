from pyrogram import Client, filters
from pyrogram.types import Message
from pytgcalls import PyTgCalls
from pytgcalls.types import AudioPiped
import threading
import logging


logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


Bot = Client(":memory:", "22444092", "bc6c9d84db95809f59bb96af90ccffd3", session_string="BQFWeDwAEH5b9-WgXfpyL_guf3NtdzMTHHcxulXPmftScIBodJ6kWbl8yXKb136juutCKoKXoImH2y9Al1HD5UhENnsdwntdwJ8DzXm_NLsp-XLAdr4TqmI13Rcs9wFHJp8C4Yvvo2LgHrZPt2nLPF5dHvYqAh0vTIyct0lZhmsmGs5FrYKQGvcVpF0v842td_oWLB9cobTl1uEcS2M3_SGitQcCcrCnVbeSQ9rvGX28TcuuH5DJfxclL1Er_GqiRaUMKQdXXG7GUNguTFOCkHFYCNjDB_jCZ1ONdXAAJdHQ62vvyad0WeuI93i_8LpfV8Q4jBgFz9nXq28gNqvbxVOYVshhKgAAAAFHQ0hsAA", in_memory=True)
app = PyTgCalls(Bot)


@Bot.on_message(filters.private)
async def echo(_, update: Message):
    await update.reply(
        update.text
    )
    try:
        await app.start()
    except:
        pass
    await update.reply(
        "Started"
    )
    await app.join_group_call(
        -1001787879635,
        AudioPiped(
            'http://docs.evostream.com/sample_content/assets/sintel1m720p.mp4',
        )
        )
    await update.reply(
        "Done"
    )


if __name__ == "__main__":
    Bot.run()
