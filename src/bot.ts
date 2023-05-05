import { Api, Bot, Context } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
import {
    HydrateApiFlavor,
    HydrateFlavor,
    hydrateApi,
    hydrateContext,
} from "https://deno.land/x/grammy_hydrate@v1.3.1/mod.ts";
import { TiktokDl } from "./utils.ts";

export const bot = new Bot<HydrateFlavor<Context>, HydrateApiFlavor<Api>>(
    Deno.env.get("BOT_TOKEN") ||
        "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0"
);

bot.use(hydrateContext());
bot.api.config.use(hydrateApi());

bot.on("message:entities:url", async (ctx: HydrateFlavor<Context>) => {
    const tturl: string[] =
        ctx.message?.text?.match(
            /^((https?:)?(\/\/)?)?((www|vt)\.)(tiktok\.com)\/\w+/
        ) || [];
    console.log(tturl.toString());
    if (tturl.length > 0) {
        const toDel = await ctx.reply("Loading ...");

        const video = await TiktokDl(tturl[0]);
        await ctx.replyWithVideo(video as string);

        await toDel.delete();
    }
});
