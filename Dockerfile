FROM ubuntu:latest

RUN apt-get -y update

RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb

RUN apt-get install -y python3.11
RUN apt-get install -y python3-pip

RUN pip3 install --upgrade pip
COPY requirements.txt .
RUN pip3 install -r requirements.txt

RUN playwright install

RUN apt-get install -y fonts-noto-core  
RUN apt-get install -y fonts-noto-color-emoji 
RUN apt-get install -y fonts-noto-ui-core 
RUN apt-get install -y fonts-dejavu-core

COPY . .

CMD [ "python3", "./game.py" ]
