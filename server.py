import json
import logging
import os
import uuid

import telegram
from telegram import InlineQueryResultCachedPhoto, Update
from telegram.ext import Application, CommandHandler, ContextTypes, InlineQueryHandler

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


async def main(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.inline_query.query.lower().split(" ")

    sub = query[0]
    page = int(query[-1]) if len(query) > 1 else None

    def only_uppers(s: str) -> str:
        upper_chars = ""
        for char in s:
            if char.isupper():
                upper_chars += char
        return upper_chars

    with open("images.json") as f:
        data = json.loads(f.read())

    subjects = {only_uppers(subject).lower(): data[subject] for subject in data}

    def CreateResults(times):
        try:

            match = {
                i: e
                for i, e in sorted(
                    subjects[sub].items(), key=lambda x: int(x[1]["order"])
                )
            }

            if page:
                match = {i: e for i, e in match.items() if e["page"] == page}

            all_results = [
                InlineQueryResultCachedPhoto(
                    uuid.uuid4(),
                    photo_file_id=match[photo]["fid"],
                )
                for photo in match
            ]

        except KeyError:
            return None

        def divide_chunks(array: list, nth: int) -> list:

            # looping till length array
            for i in range(0, len(array), nth):
                yield array[i : i + nth]

        results_chunks = list(divide_chunks(all_results, 50))
        try:
            return results_chunks[times]
        except IndexError:
            return None

    await update.inline_query.answer(
        CreateResults,
        auto_pagination=True,
        cache_time=1,
        switch_pm_text="Help❓",
        switch_pm_parameter="help",
    )


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.effective_message.reply_text(
        "\
        ⚠️ This bot is a utility tool for **Grade-10** ( __aka old **Grade-9**__ ) students of **Myanmar** 🇲🇲 and will be of no use to any others.\
        \n⚠️ ဤ bot သည် **မြန်မာ** 🇲🇲 နိုင်ငံရှိ **Grade-10** ကျောင်းသားများအတွက် အကူအညီကိရိယာဖြစ်၍ အခြားမည်သူ့အတွက်မှ အသုံး၀င်မည်မဟုတ်ပေ။\
        ",
        parse_mode=telegram.constants.ParseMode.MARKDOWN_V2,
    )
    await update.effective_chat.send_action(telegram.constants.ChatAction.UPLOAD_VIDEO)
    await update.effective_chat.send_video("")


if __name__ == "__main__":

    application = Application.builder().token(os.getenv("TOKEN")).build()

    application.add_handler(InlineQueryHandler(main))

    application.add_handler(CommandHandler("start", start))

    application.run_polling()
