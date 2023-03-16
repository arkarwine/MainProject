import json
import logging
import random

import requests
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

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


if __name__ == "__main__":

    application = (
        Application.builder()
        .token("5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU")
        .build()
    )

    application.add_handler(CommandHandler("game", Game))

    application.run_polling()
