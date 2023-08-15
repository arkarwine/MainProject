import logging
import re

from pyrogram import Client, filters
from pyrogram.enums import ParseMode
from pyrogram.types import Message

from static.fbDl import FbDownload
from static.InDl import InstaDownload
from static.musicDl import YTmusicDownload
from static.ttDl import TiktokDownload
from static.ytDl import YTdownload

logging.basicConfig(
    format="[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s", level=logging.INFO
)

Bot = Client(
    "bot",
    "22444092",
    "bc6c9d84db95809f59bb96af90ccffd3",
    bot_token="5618691960:AAGR2iKzDsPHR8AIc_TclP5uspnAddlgUB8",
)


@Bot.on_message(
    filters.regex(
        "^((https?:)?\/\/)?((www|m)\.)?(youtube\.com|youtu.be)\/\w+", flags=re.I
    )
)
async def youtube(bot: Bot, update: Message):
    print("youtube")
    toDel = await update.reply("Loading...")
    try:
        dlLink = YTdownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("An Error Occured !")
    await toDel.delete()


@Bot.on_message(
    filters.regex("^((https?:)?(\/\/)?)?(music\.youtube\.com)\/\w+", flags=re.I)
)
async def music(bot: Bot, update: Message):
    print("music")
    toDel = await update.reply("Loading...")
    try:
        dlLink = YTmusicDownload(update.text)
        await bot.send_audio(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except:
        await update.reply("An Error Occured !")
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^((https?:)?(\/\/)?)?((www|vt|vm)\.)(tiktok\.com)\/[\w@\/]+", flags=re.I
    )
)
async def tiktok(bot: Bot, update: Message):
    print("tiktok")
    toDel = await update.reply("Loading...")
    try:
        dlLink = TiktokDownload(update.text)
        await bot.send_video(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except:
        await update.reply("An Error Occured !")
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(fb|mbasic.facebook|m\.facebook|facebook|fb)\.(com|me|watch)\/\w+",
        flags=re.I,
    )
)
async def fb(bot: Bot, update: Message):
    print("fb")
    toDel = await update.reply("Loading...")
    try:
        dlLink = FbDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("An Error Occured !")
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(instagram.com|instagr.am|instagr.com)\/\w+", flags=re.I
    )
)
async def insta(bot: Bot, update: Message):
    print("insta")
    toDel = await update.reply("Loading...")
    try:
        dlLink = InstaDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("An Error Occured !")
    await toDel.delete()


@Bot.on_message(filters.command("help", prefixes=["/", "!", "?"]))
async def help(bot: Bot, update: Message):
    print("help")
    await update.reply(
        "<b>Usage ❓️</b>:\nPaste the video link here.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / facebook / Youtube Music</i>",
        disable_web_page_preview=True,
    )


print("started")

Bot.run()
