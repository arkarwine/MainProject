import { webhookCallback } from "https://deno.land/x/grammy@v1.18.1/mod.ts";
// You might modify this to the correct way to import your `Bot` object.
import bot from "./bot.ts";

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve({ port: 8080 }, async (req) => {
    if (req.method === "POST") {
        console.log("POST");

        return await handleUpdate(req);
    }
    return new Response("200");
});
