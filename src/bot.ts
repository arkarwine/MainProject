import { Bot, Context } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
import {
    HydrateFlavor,
    hydrate,
} from "https://deno.land/x/grammy_hydrate@v1.3.1/mod.ts";
import { TiktokDl } from "./utils.ts";

type MyContext = HydrateFlavor<Context>;

export const bot = new Bot<MyContext>(
    Deno.env.get("BOT_TOKEN") ||
        "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0"
);

bot.use(hydrate());

bot.on("message:entities:url", async (ctx: Context) => {
    const tturl: string[] =
        ctx.message?.text?.match(
            /^((https?:)?(\/\/)?)?((www|vt)\.)(tiktok\.com)\/\w+/
        ) || [];
    if (tturl) {
        console.log(tturl[0]);
        const video = await TiktokDl(tturl[0]);
        await ctx.replyWithVideo(video);
    }
});
