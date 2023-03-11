import html
import json
import logging
import os
import traceback
import uuid
from cmath import log

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
        (
            "⚠️ Disclaimer "
            "\n"
            "This bot is a utility tool for <b>Grade-10</b> ( <i>aka old <b>Grade-9</b></i> ) students of <b>Myanmar</b> 🇲🇲 and will be of no use to any others."
            "\n"
            "ဤ bot သည် <b>မြန်မာ</b> 🇲🇲 နိုင်ငံရှိ <b>Grade-10</b> ကျောင်းသားများအတွက် အကူအညီကိရိယာဖြစ်၍ အခြားမည်သူ့အတွက်မှ အသုံး၀င်မည်မဟုတ်ပေ။"
        ),
        parse_mode=telegram.constants.ParseMode.HTML,
    )
    await update.effective_chat.send_action(telegram.constants.ChatAction.UPLOAD_VIDEO)
    # await update.effective_chat.send_video("")


async def log_error(update: Update, context: ContextTypes.DEFAULT_TYPE):

    tb_list = traceback.format_exception(
        None, context.error, context.error.__traceback__
    )
    tb_string = "".join(tb_list)

    update_str = update.to_dict() if isinstance(update, Update) else str(update)

    await context.bot.send_message(
        -990819807,
        (
            f"An exception was raised while handling an update\n"
            f"<pre>update = {html.escape(json.dumps(update_str, indent=2, ensure_ascii=False))}"
            "</pre>\n\n"
            f"<pre>context.chat_data = {html.escape(str(context.chat_data))}</pre>\n\n"
            f"<pre>context.user_data = {html.escape(str(context.user_data))}</pre>\n\n"
            f"<pre>{html.escape(tb_string)}</pre>"
        ),
        parse_mode=telegram.constants.ParseMode.HTML,
    )


if __name__ == "__main__":

    application = Application.builder().token(os.getenv("TOKEN")).build()

    application.add_handler(InlineQueryHandler(main))

    application.add_handler(CommandHandler("start", start))

    application.add_error_handler(log_error)

    application.run_polling()
