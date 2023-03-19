FROM python:3.11

RUN sudo apt update

RUN sudo apt install wkhtmltopdf

RUN pip3 install --upgrade pip
COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "./game.py" ]
