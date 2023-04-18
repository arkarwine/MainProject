import logging

from telegram.ext import Application

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


if __name__ == "__main__":
    application = (
        Application.builder()
        .token("5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0")
        .build()
    )

    application.run_polling()
