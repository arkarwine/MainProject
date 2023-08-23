FROM denoland/deno:latest

COPY . .

EXPOSE 8080

CMD [ "deno", "task", "serve" ]