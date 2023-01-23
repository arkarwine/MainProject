from pyrogram import Client, filters
from pyrogram.types import Message
from flask import Flask 
import logging
import threading

app = Flask(__name__)

@app.route('/')
def Home():
    return "Hello World !"


threading.Thread(target=lambda: app.run(host='0.0.0.0')).start()
