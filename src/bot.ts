import { Bot, Context } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
import {
    HydrateFlavor,
    hydrate,
} from "https://deno.land/x/grammy_hydrate@v1.3.1/mod.ts";
import { TiktokDl, fixUrl } from "./utils.ts";

type MyContext = HydrateFlavor<Context>;

export const bot = new Bot<MyContext>(
    Deno.env.get("BOT_TOKEN") ||
        "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0"
);

bot.use(hydrate());

bot.on("message:entities:url", async (ctx: HydrateFlavor<Context>) => {
    const tturl: string[] =
        ctx.message?.text?.match(
            /^((https?:)?(\/\/)?)?((www|vt)\.)(tiktok\.com)\/\w+/g
        ) || [];
    if (tturl.length > 0) {
        const toDel = await ctx.reply("Loading ...");

        const video = await TiktokDl(fixUrl(tturl[0]));
        await ctx.replyWithVideo(video as string);

        await toDel.delete();
    }
});
