from telethon.sync import TelegramClient, events
from telethon.sessions import StringSession
from flask import Flask
import logging
import threading


logging.basicConfig(format='[%(levelname) 5s/%(asctime)s] %(name)s: %(message)s',
                    level=logging.INFO)


server = Flask(__name__)

@server.route('/')
def Home():
    return "Hello from Mogenius !!"


with TelegramClient(StringSession("1BVtsOH0Bu2OCV08TBRHRvXKONboqEtvdibAbkRZySFIwcKjgDVXhdvPOE5TwmAFTGXcnR3iMhVTI6Ru85qQkJG2xaXjX7PYZQj-slUB9k_Juv3SddRR57c42_wqxnhj6ugatrNZnRs4xfyAydFv5PDFKNiG-75oGnIBWwVypVLP0X7f8hUK9_lCYCP4IwGfX6fWugb__3hsuwVQ5xuaoV47dVBqsEB8E4_eVtWp44Y16CnDZG0Pob2HCLZ9l3DT9cyA8whtfOQiT_W3rqALU0-d3XDKn7Sdg7jV79zxwBPqPCDvMX03NYqqrFTyCAUY3FWGbrN4IBU1RZr85qO4ZM1JSgYWI-Mk="), "22444092", "bc6c9d84db95809f59bb96af90ccffd3") as client:
    
    client.send_message('me', 'me')

    @client.on(events.NewMessage)
    async def my_event_handler(event):
        await event.reply(event.raw_text)
    

    if __name__ == "__main__":
        threading.Thread(target=lambda: server.run(host='0.0.0.0', port=1337)).start()
        client.start()
        client.run_until_disconnected()
