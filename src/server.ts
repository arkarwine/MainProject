import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
import { bot } from "./bot.ts";
import { webhookCallback } from "./deps.deno.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
    try {
        if (req.method == "POST") {
            const url = new URL(req.url);
            if (url.pathname.slice(1) == bot.token) {
                return await handleUpdate(req);
            }
        }
        return new Response();
    } catch (err) {
        console.log(err.stack);
        return new Response();
    }
});
