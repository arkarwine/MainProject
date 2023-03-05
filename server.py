import json
import logging
import os
import uuid
from telegram import InlineQueryResultCachedPhoto, Update
from telegram.ext import InlineQueryHandler, Application, ContextTypes


logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


async def main(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.inline_query.query.lower()

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
                    subjects[query].items(), key=lambda x: int(x[1]["order"])
                )
            }

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

    await update.inline_query.answer(CreateResults, auto_pagination=True, cache_time=1)


if __name__ == "__main__":

    application = Application.builder().token(os.environ["TOKEN"]).build()

    application.add_handler(InlineQueryHandler(main))

    application.run_polling()
