FROM denoland/deno:latest

COPY . .

ENV BOT_TOKEN=5618691960:AAETR5IfqyZOIcZ5Cgst1KX8JYY7wpighU0

CMD [ "deno", "--help" ]