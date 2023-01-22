from flask import Flask
from telegram import Bot

server = Flask(__name__)

BotToken = "5943587962:AAHKiQ2-_TDtDReJd1ac0vZ4413Tpvpr-jU"

@server.route("/")
def hello():
    response = (Bot(BotToken).send_message(5030058973, 'hello'))
    return "Hello World!"

if __name__ == "__main__":
   server.run(host='0.0.0.0', port=1337)
