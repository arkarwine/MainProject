import html
import json
import logging
import os
import random
import traceback
from io import StringIO

import requests
import telegram
from bs4 import BeautifulSoup
from html2image import Html2Image
from playwright.async_api import async_playwright
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

    Html2Image(custom_flags=["--no-sandbox"])

    try:
        username = context.args[0]
    except IndexError:
        await update.effective_chat.send_message(
            "Provide a username as an argument please."
        )
        await toDel.delete()
        return

    html = requests.get(f"https://www.tiktok.com/@{username}?refer=creator_embed").text

    soup = BeautifulSoup(html, "html.parser")

    div = "#main-content-others_homepage > div > div.tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492"

    data = soup.select_one(
        div,
    )

    final_data = (
        str(data)
        + """
        <style>
            .tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2 {
                margin: 50px;
                display: inline-block;
            }
        </style>
        """
    )

    for tag in data.select("svg"):
        tag.extract()
    for tag in data.select("button"):
        tag.extract()

    with open("profile.html", "w") as f:
        f.write(final_data)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("file://" + str(os.getcwd()) + "/profile.html")
        img = page.locator(
            "body > div > div.tiktok-1gk89rh-DivShareInfo.ekmpd5l2 > div.tiktok-uha12h-DivContainer.e1vl87hj1 > span > img"
        )
        await img.scroll_into_view_if_needed()
        await img.evaluate(
            "image => image.complete || new Promise(f => image.onload = f)"
        )
        png = page.locator(
            ".tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2"
        )

        png_bytes = png.screenshot(animations="disabled")
        await browser.close()

    await update.effective_message.reply_photo(png_bytes)
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
