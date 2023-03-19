import json
import logging
import random

import requests
from bs4 import BeautifulSoup
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


async def Game(update: Update, context: ContextTypes.DEFAULT_TYPE):

    toDel = await update.effective_message.reply_text("One second...")

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

    try:
        context.args[0]
    except IndexError:
        pass

    html = requests.get("https://www.tiktok.com/@ar_kar_wine?refer=creator_embed").text

    soup = BeautifulSoup(html, "html.parser")

    data = soup.select_one(
        "#main-content-others_homepage > div > div.tiktok-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492 > div.tiktok-1gk89rh-DivShareInfo.ekmpd5l2 > div.tiktok-uha12h-DivContainer.e1vl87hj1 > span > img",
    )["src"]

    await update.effective_message.reply(data if data else "None")


if __name__ == "__main__":

    application = (
        Application.builder()
        .token("5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU")
        .build()
    )

    application.add_handler(CommandHandler("game", Game))

    application.run_polling()
