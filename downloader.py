import logging
import re

from pyrogram import Client, filters
from pyrogram.enums import ParseMode
from pyrogram.types import InlineKeyboardButton, InlineKeyboardMarkup
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
    bot_token="5618691960:AAGEx8HWx0PjFzMLB1Aax5G_cb0nns_kKls",
)


@Bot.on_message(
    filters.regex(
        "^((https?:)?\/\/)?((www|m)\.)?(youtube\.com|youtu.be)\/\w+", flags=re.I
    )
)
async def youtube(bot: Bot, update):
    try:
        dlLink = YTdownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("Invalid Url!")


@Bot.on_message(
    filters.regex("^((https?:)?(\/\/)?)?(music\.youtube\.com)\/\w+", flags=re.I)
)
async def music(bot: Bot, update):
    try:
        dlLink = YTmusicDownload(update.text)
        await bot.send_audio(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except:
        await update.reply("Invalid Url!")


@Bot.on_message(
    filters.regex("^((https?:)?(\/\/)?)?((www|vt)\.)(tiktok\.com)\/\w+", flags=re.I)
)
async def tiktok(bot: Bot, update):
    try:
        dlLink = TiktokDownload(update.text)
        await bot.send_video(
            update.chat.id,
            dlLink,
            caption=f'<a href="{dlLink}">Direct Download Link</a>',
            parse_mode=ParseMode.HTML,
        )
    except:
        await update.reply("Invalid Url!")


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(fb|mbasic.facebook|m\.facebook|facebook|fb)\.(com|me|watch)\/\w+",
        flags=re.I,
    )
)
async def fb(bot: Bot, update):
    try:
        dlLink = FbDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("Invalid Url!")


@Bot.on_message(
    filters.regex(
        "^(https?:\/\/)?(www\.)?(instagram.com|instagr.am|instagr.com)\/\w+", flags=re.I
    )
)
async def insta(bot: Bot, update):
    try:
        dlLink = InstaDownload(update.text)
        await update.reply(
            f'<a href="{dlLink}">Direct Download Link</a>', parse_mode=ParseMode.HTML
        )
    except:
        await update.reply("Invalid Url!")


@Bot.on_message(filters.command("help", prefixes=["/", "!", "?"]))
async def help(bot: Bot, update):
    await update.reply(
        '<b>Usage ❓️</b>:\nCopy paste the video link in the <a href="https://t.me/NoWaterMarkDownload">group</a>.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / facebook / Youtube Music</i>',
        disable_web_page_preview=True,
    )


@Bot.on_chat_join_request()
async def greet(bot: Bot, update):
    await bot.send_message(
        update.from_user.id,
        f"Hello, {update.from_user.mention(update.from_user.first_name)}!\nI am <i>Media Download Bot</i>\nIf you need any help just send /help in the group or here! 🙂",
    )
    await bot.send_message(
        update.from_user.id,
        '<b>How to use❓️</b>:\nCopy paste the video link in the <a href="https://t.me/NoWaterMarkDownload">group</a>.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok</i> / <i>Youtube</i> / <i>Instagram</i> / <i>facebook</i> / <i>Youtube Music</i>',
        disable_web_page_preview=True,
    )
    await bot.send_message(
        update.from_user.id,
        "Have fun! 😊",
        reply_markup=InlineKeyboardMarkup(
            [
                [
                    InlineKeyboardButton(
                        "Go to the group", url="https://t.me/NoWaterMarkDownload"
                    )
                ]
            ]
        ),
    )
    await update.approve()


@Bot.on_message(filters.regex("test"))
async def test(bot: Bot, update):
    print("ran")
    await bot.send_video(
        update.from_user.id,
        "https://api16-normal-useast5.us.tiktokv.com/aweme/v1/play/?video_id=v0f025gc0000ce4o0drc77u6t1820lhg&line=0&is_play_url=1&source=PackSourceEnum_AWEME_DETAIL&file_id=b74adf17f9cf4cf79c06da7eb7fedf34",
    )


Bot.run()
