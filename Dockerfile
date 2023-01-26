FROM nikolaik/python-nodejs:python3.9-nodejs16

RUN apt update && apt upgrade -y
RUN apt install ffmpeg -y

RUN pip3 install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

RUN python -m yt_dlp --rm-cache-dir

COPY . .

EXPOSE 1337
USER 1000

CMD [ "python", "./server.py" ]
