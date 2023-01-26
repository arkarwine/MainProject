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
    try:
        term = update.text
        toEdit = await update.reply(
            'Starting...'
        )
        if re.findall(r'^(http|https):\/\/[^ "]+$', term):
            url = os.popen(f'python -m yt_dlp -g -f "bestaudio" "{term}"').read()
        else:
            url = os.popen(f'python -m yt_dlp -g -f "bestaudio" ytsearch1:"{term}"').read()
        await update.reply(
            url
        )
        try:
            await app.join_group_call(
                -1001787879635,
                AudioPiped(
                    "https://rr4---sn-hp57yn7y.googlevideo.com/videoplayback?expire=1674760673&ei=gX3SY7CUMIeRigSqwaiwCg&ip=195.181.162.179&id=o-AFIbixrv_WMKeK-kUZxFslJZhXy9s_WXcstJq-wmiN7V&itag=251&source=youtube&requiressl=yes&mh=Ux&mm=31%2C26&mn=sn-hp57yn7y%2Csn-p5qlsn76&ms=au%2Conr&mv=m&mvi=4&pl=23&initcwndbps=640000&spc=H3gIhsCtwGQb55cbYOMsk5gHRIBAwmg&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=3728829&dur=209.581&lmt=1670447586727367&mt=1674738806&fvip=5&keepalive=yes&fexp=24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgO5-vYU57mXdAK6GPdDlGtM1ODWBniuCnCclW6P3Z358CIEyVuCYpYcTdgRlVkU25N3Y9kxpiEe1RTaSlc3FNNQyh&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPXPaYgrFkHFT_mlLocN01yorLhgbe4Tt8K4uCGB8GXxAiBb1pY6FfMnaO2xgWWEdhLYUt5jvWOEVsYp8cCrMXUcHA%3D%3D",
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

