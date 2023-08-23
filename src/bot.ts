import { Bot, Context } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
import {
    HydrateFlavor,
    hydrate,
} from "https://deno.land/x/grammy_hydrate@v1.3.1/mod.ts";
import { FacebookDl } from "./utils/fbDl.ts";
import { InstagramDl } from "./utils/inDl.ts";
import { TiktokDl } from "./utils/ttDl.ts";
import { YoutubeDl } from "./utils/ytDl.ts";

type MyContext = HydrateFlavor<Context>;

export const bot = new Bot<MyContext>(
    Deno.env.get("BOT_TOKEN") ||
        "5529005476:AAFsN3-AeOUiwghYEFArOyFrrnHP8mmJEk0"
);

bot.use(hydrate());

bot.command("help", async (ctx) => {
    await ctx.reply(
        "<b>Usage ❓️</b>:\nPaste the video link here.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / facebook</i>",
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }
    );
});

bot.on("::url", async (ctx: HydrateFlavor<Context>) => {
    let text = ctx.message?.text!;

    if (!text.startsWith("https://")) text = "https://" + text;

    const re = [
        {
            regex: /^(https?:\/\/)?(www\.)?(fb|mbasic.facebook|m\.facebook|facebook|fb)\.(com|me|watch)\/\w+/i,
            downloader: FacebookDl,
        },
        {
            regex: /^(https?:\/\/)?(www\.)?(instagram.com|instagr.am|instagr.com)\/\w+/i,
            downloader: InstagramDl,
        },
        {
            regex: /^((https?:)?(\/\/)?)?((www|vt|vm)\.)(tiktok\.com)\/[\w@\/]+/i,
            downloader: TiktokDl,
        },
        {
            regex: /^((https?:)?\/\/)?((www|m)\.)?(youtube\.com|youtu.be)\/\w+/i,
            downloader: YoutubeDl,
        },
    ] as const;

    for (const r of re) {
        const url = text.match(r.regex);
        if (url !== null) {
            const toDel = await ctx.reply("Loading ...");
            const video = (await r.downloader(url[0])) as string;
            try {
                await ctx.replyWithVideo(video, {
                    caption: `<a href="${video}">Direct Download Link</a>`,
                });
            } catch {
                await ctx.reply(`<a href="${video}">Direct Download Link</a>`);
            }
            await toDel.delete();
            break;
        }
    }
});
