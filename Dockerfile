FROM python:3.8

RUN apt update && apt upgrade -y
RUN apt install ffmpeg nodejs=18.13.0 -y

RUN pip3 install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

USER 1000

CMD [ "python", "./server.py" ]
