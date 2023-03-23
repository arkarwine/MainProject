import html
import json
import logging
import os
import random
import traceback
from io import StringIO

import requests
import telegram
from html2image import Html2Image
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)

tele_log = logging.getLogger(__name__)

tele_handler = logging.StreamHandler()
tele_handler.setLevel(logging.INFO)

tele_formatter = logging.Formatter(
    "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
tele_handler.setFormatter(tele_formatter)

tele_log.addHandler(tele_handler)


async def Game(update: Update, context: ContextTypes.DEFAULT_TYPE):

    toDel = await update.effective_message.reply_text("One second ...")

    res = requests.get("https://mapi.mobilelegends.com/hero/list")

    data = json.loads(res.text)

    heros = data["data"]

    chosen_heros = random.sample(heros, 3)
    chosen_hero = random.choice(chosen_heros)

    hero_data = json.loads(
        requests.get(
            f"https://mapi.mobilelegends.com/hero/detail?id={chosen_hero['heroid']}"
        ).text
    )["data"]

    hero_skills = [f"https:{skill['icon']}" for skill in hero_data["skill"]["skill"]]

    chosen_skill = random.choice(hero_skills)

    question = {
        "choices": [hero["name"] for hero in chosen_heros],
        "q": chosen_skill,
        "a": chosen_hero["name"],
    }

    await update.effective_message.reply_photo(question["q"])

    await update.effective_chat.send_poll(
        "Choose the right one.",
        question["choices"],
        type="quiz",
        correct_option_id=chosen_heros.index(chosen_hero),
        is_anonymous=False,
    )

    await toDel.delete()


async def TikTok(update: Update, context: ContextTypes.DEFAULT_TYPE):

    toDel = await update.effective_message.reply_text("Loading...")

    convertor = Html2Image(custom_flags=["--no-sandbox"])

    print(os.popen("chromium-browser"))

    convertor.screenshot(url="https://www.python.org", save_as="python_org.png")

    # try:
    #     username = context.args[0]
    # except IndexError:
    #     await update.effective_chat.send_message(
    #         "Provide a username as an argument please."
    #     )
    #     await toDel.delete()
    #     return

    # html = requests.get(f"https://www.tiktok.com/@{username}?refer=creator_embed").text

    # soup = BeautifulSoup(html, "html.parser")

    # data = str(
    #     soup.select_one(
    #         "#main-content-others_homepage > div > div.tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492",
    #     )
    # )

    # img = imgkit.from_string(data, False) if data else "None"

    # print(img, type(img))

    await update.effective_message.reply_photo(open("python_org.png", "rb").read())
    await toDel.delete()


async def log_error(update: Update, context: ContextTypes.DEFAULT_TYPE):

    tb_list = traceback.format_exception(
        None, context.error, context.error.__traceback__
    )
    tb_string = "".join(tb_list)

    update_str = update.to_dict() if isinstance(update, Update) else str(update)

    log_stream = StringIO()

    tele_handler.setStream(log_stream)

    tele_log.error(
        (
            f"An exception was raised while handling an update\n\n"
            f"<pre>update = {html.escape(json.dumps(update_str, indent=2, ensure_ascii=False))}"
            "</pre>\n\n"
            f"<pre>context.chat_data = {html.escape(str(context.chat_data))}</pre>\n\n"
            f"<pre>context.user_data = {html.escape(str(context.user_data))}</pre>\n\n"
            f"<pre>{html.escape(tb_string)}</pre>"
        )
    )

    error = log_stream.getvalue()

    print(error)

    await context.bot.send_message(
        -990819807,
        ("@arkarwine\n" f"{error}"),
        parse_mode=telegram.constants.ParseMode.HTML,
    )


if __name__ == "__main__":

    application = (
        Application.builder()
        .token("5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU")
        .build()
    )

    application.add_handler(CommandHandler("game", Game))

    application.add_handler(CommandHandler("tiktok", TikTok))

    application.add_error_handler(log_error)

    application.run_polling()
