from pyrogram import Client, filters
from pyrogram.types import Message
from flask import Flask 
import logging
import threading

server = Flask(__name__)

@server.route('/')
def Home():
    return "Hello World !"


threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
