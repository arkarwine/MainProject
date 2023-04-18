import datetime
import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    ChatJoinRequestHandler,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
)

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


CHAT_ID = -1001924235111


async def AskName(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.effective_user.send_message("Name Please !")

    return 0


async def AskGrade(update: Update, context: ContextTypes.DEFAULT_TYPE):
    grades = InlineKeyboardMarkup(
        [
            [InlineKeyboardButton("G-" + str(i), callback_data="G-" + str(i))]
            for i in range(5, 13)
        ],
    )
    await update.effective_chat.send_message("Grade Please !", reply_markup=grades)

    return 1


async def ConfirmGrade(update: Update, context: ContextTypes.DEFAULT_TYPE):
    callback_query = update.callback_query

    buttons = InlineKeyboardMarkup(
        [[InlineKeyboardButton("✅", "true")], [InlineKeyboardButton("❎", "false")]]
    )

    await callback_query.answer()
    await callback_query.message.edit_text(
        f"Grade : {callback_query.data}", reply_markup=buttons
    )
    # await update.effective_user.approve_join_request(CHAT_ID)
    # await update.effective_chat.send_message("Approved !")

    return ConversationHandler.END


async def TimeOut(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.effective_user.send_message("Timed Out !")

    return ConversationHandler.TIMEOUT


async def Cancel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.effective_chat.send_message("Canceled !")

    return ConversationHandler.END


if __name__ == "__main__":
    application = (
        Application.builder()
        .token("5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0")
        .build()
    )

    application.add_handler(
        ConversationHandler(
            entry_points=[ChatJoinRequestHandler(AskName)],
            states={
                ConversationHandler.TIMEOUT: [
                    MessageHandler(filters.TEXT, TimeOut),
                    ChatJoinRequestHandler(TimeOut),
                ],
                0: [MessageHandler(filters.TEXT, AskGrade)],
                1: [CallbackQueryHandler(ConfirmGrade)],
            },
            fallbacks=[CommandHandler("cancel", Cancel)],
            per_chat=False,
            conversation_timeout=datetime.timedelta(minutes=15),
        )
    )

    application.run_polling()
