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


Bot = Client(":memory:", "22444092", "bc6c9d84db95809f59bb96af90ccffd3", session_string="BQFWeDwAij1DFjK9HSSJrJnBfh6D88rGZtZIFk3H_3yt9S1QdwiUNiAQoujVh9F1Ktf5urb4g0wTwidSifYAImQ9HGSTmucOPlu59s4X0g5RJBV736bTGHpe_HWK5gvTRYelzgBm-rDzpxiTo-Om0FOyYfC-8MZ1SlSBgU0MaSlgVrP7NT5D2kkvaxNc--AIaCvndvk0GJ2pfMX5batga-lGTwoSbrnal1QXjrl1QIBYimWrCJ8NN6chWH9TMdDFcyuYSZAjazeBuVl0b6Dcz6MtqWGLglKToTZZFOGSp_f_cV2Xa3dmhTWkQWEqdJu5EmmchZkbV5SMa3odAhq4LbaAQpo4IwAAAAFHQ0hsAA",in_memory=True)
app = PyTgCalls(Bot)


@Bot.on_message(filters.create(lambda _, client, update: all([update.chat.type==ChatType.SUPERGROUP, update.via_bot, False if not update.text else re.findall(r'.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*', update.text)])))
async def echo(bot: Client, update: Message):
    print(await bot.export_session_string())
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
                    "https://rr3---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1674926944&ei=AAfVY7eOC46ZgQfDyYbYDQ&ip=23.88.39.196&id=o-ACzzbsnIOOGWnGqe13cCJINWbnNPCQjg5lWm7tIgSgRX&itag=251&source=youtube&requiressl=yes&mh=Y5&mm=31%2C29&mn=sn-4g5edn6y%2Csn-4g5lznes&ms=au%2Crdu&mv=m&mvi=3&pl=25&initcwndbps=291250&spc=H3gIhhdRJBLSsi9ns6sAA8dAAdJ5NdM&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=3587634&dur=213.521&lmt=1656732159493183&mt=1674904888&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDKLAWbm2X5viEjnSMfO36qbpPTiYs5A86EfmvUNTnTYCIQDRFOgcOS2S6zGe18d3LxsGGKzZOPxPQmPgiPDhRD62mQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgEIE8ymdF46QSAdUmrcMtISDdyVXOoTR27YDuHSggmJUCIAUaBe-ugy1zRCVL-rmW-qSgtr0yUw5ktGnVU3jOEEwP",
                )
            )
        except:
            await app.change_stream(
                -1001787879635,
                AudioPiped(
                    'https://rr3---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1674926944&ei=AAfVY7eOC46ZgQfDyYbYDQ&ip=23.88.39.196&id=o-ACzzbsnIOOGWnGqe13cCJINWbnNPCQjg5lWm7tIgSgRX&itag=251&source=youtube&requiressl=yes&mh=Y5&mm=31%2C29&mn=sn-4g5edn6y%2Csn-4g5lznes&ms=au%2Crdu&mv=m&mvi=3&pl=25&initcwndbps=291250&spc=H3gIhhdRJBLSsi9ns6sAA8dAAdJ5NdM&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=3587634&dur=213.521&lmt=1656732159493183&mt=1674904888&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDKLAWbm2X5viEjnSMfO36qbpPTiYs5A86EfmvUNTnTYCIQDRFOgcOS2S6zGe18d3LxsGGKzZOPxPQmPgiPDhRD62mQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgEIE8ymdF46QSAdUmrcMtISDdyVXOoTR27YDuHSggmJUCIAUaBe-ugy1zRCVL-rmW-qSgtr0yUw5ktGnVU3jOEEwP',
                )
            )
        await toEdit.edit(
            f'Streaming "{json.loads(response.text)["title"]}"'
        )
    except Exception as e:
        await toEdit.edit(
            e
        )


if __name__ == "__main__":
    def main():
        app.start()
        idle()
    # threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
    main()

