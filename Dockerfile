FROM ubuntu:latest

RUN apt-get -y update

RUN apt-get install -y software-properties-common

RUN add-apt-repository -y ppa:saiarcot895/chromium-beta
RUN apt-get -y update
RUN apt-get install -y chromium-browser

RUN apt-get install -y python3.11
RUN apt-get install -y python3-pip

RUN pip3 install --upgrade pip
COPY requirements.txt .
RUN pip3 install -r requirements.txt

RUN playwright install

COPY . .

CMD [ "python3", "./game.py" ]
