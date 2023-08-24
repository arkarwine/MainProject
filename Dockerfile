FROM denoland/deno:latest

COPY . .

CMD [ "deno", "task", "serve" ]