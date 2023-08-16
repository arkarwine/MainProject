import logging
import re
import traceback

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


debugger = logging.getLogger(__name__)

debugger.setLevel(logging.DEBUG)


Bot = Client(
    "bot",
    "22444092",
    "bc6c9d84db95809f59bb96af90ccffd3",
    bot_token="5618691960:AAGR2iKzDsPHR8AIc_TclP5uspnAddlgUB8",
)


async def handle_error(
    bot: Bot, update: Message, e: Exception, logger: logging.Logger = logging
):
    tb_list = traceback.format_exception(None, e, e.__traceback__)
    tb_string = "".join(tb_list)
    logger.error(tb_string)
    await update.reply("An Error Occured !\n" + str(e))


@Bot.on_message(
    filters.regex(
        "^((https?:)?\/\/)?((www|m)\.)?(youtube\.com|youtu.be)\/\w+", flags=re.I
    )
)
async def youtube(bot: Bot, update: Message):
    debugger.info("youtube")
    toDel = await update.reply("Loading...")
    try:
        dlLink = YTdownload(update.text, debugger)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except Exception as e:
        await handle_error(bot, update, e)
    await toDel.delete()


@Bot.on_message(
    filters.regex("^((https?:)?(\/\/)?)?(music\.youtube\.com)\/\w+", flags=re.I)
)
async def music(bot: Bot, update: Message):
    debugger.info("music")
    toDel = await update.reply("Loading...")
    try:
        dlLink = YTmusicDownload(update.text)
        await bot.send_audio(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except Exception as e:
        await handle_error(bot, update, e)
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^((https?:)?(\/\/)?)?((www|vt|vm)\.)(tiktok\.com)\/[\w@\/]+", flags=re.I
    )
)
async def tiktok(bot: Bot, update: Message):
    debugger.info("tiktok")
    toDel = await update.reply("Loading...")
    try:
        dlLink = TiktokDownload(update.text)
        await bot.send_video(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except Exception as e:
        await handle_error(bot, update, e)
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(fb|mbasic.facebook|m\.facebook|facebook|fb)\.(com|me|watch)\/\w+",
        flags=re.I,
    )
)
async def fb(bot: Bot, update: Message):
    debugger.info("fb")
    toDel = await update.reply("Loading...")
    try:
        dlLink = FbDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except Exception as e:
        await handle_error(bot, update, e)
    await toDel.delete()


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(instagram.com|instagr.am|instagr.com)\/\w+", flags=re.I
    )
)
async def insta(bot: Bot, update: Message):
    debugger.info("insta")
    toDel = await update.reply("Loading...")
    try:
        dlLink = InstaDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except Exception as e:
        await handle_error(bot, update, e)
    await toDel.delete()


@Bot.on_message(filters.command("help", prefixes=["/", "!", "?"]))
async def help(bot: Bot, update: Message):
    debugger.info("help")
    await update.reply(
        "<b>Usage ❓️</b>:\nPaste the video link here.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / facebook / Youtube Music</i>",
        disable_web_page_preview=True,
    )


debugger.info("started")

Bot.run()
