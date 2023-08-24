import {
    NewMessage,
    NewMessageEvent,
    StringSession,
    TelegramClient,
} from "https://deno.land/x/grm/mod.ts";
import { FacebookDl } from "./utils/fbDl.ts";
import { InstagramDl } from "./utils/inDl.ts";
import { TiktokDl } from "./utils/ttDl.ts";
import { YoutubeDl } from "./utils/ytDl.ts";

const BOT_TOKEN = "5618691960:AAETR5IfqyZOIcZ5Cgst1KX8JYY7wpighU0"; // put your bot token here

const client = new TelegramClient(
    new StringSession(
        "1BQANOTEuMTA4LjU2LjE2MQG7ClrL+PYtTGBhFOaCI3mrh4+VcLbEIbotpEEWFySnTGo3POOmFvx2zG6wjR9D2Jlhr9+DTbGKkYk7B8x6gNwDgSdQhHtPj1FTGOcnG0i3qwlmsBHGl7lrcQ0lUnwuj+NQ0O+RyAVtQwf1+EFlNGet+yZE7lZrMkZwaf5iiM3E8S4xhXVLnPpn1ozg8h5daWh8ANN94YiXaZOEvylX2I0C0m5ob8+F/b7oQf67MOGtDKXva5m20jFreQYunxt04G765sg7W7LFubuz5yPHtGFTuzIDp/iVOy/MNcW+S6pOEmIYGEnCgwVzpFo8hcfx935OD31f5FwcT/lhKje5/nK7jg=="
    ),
    22444092,
    "bc6c9d84db95809f59bb96af90ccffd3",
    { connectionRetries: 5 }
);
await client.start({
    botAuthToken: BOT_TOKEN,
});

client.addEventHandler(
    async (update: NewMessageEvent) => {
        let text = update.message?.text!;

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
                const toDel = await client.sendMessage(update.chatId!, {
                    message: "Loading ...",
                });
                const video = (await r.downloader(url[0])) as string;
                try {
                    const msg = await await client.sendMessage(update.chatId!, {
                        message: `<a href="${video}">Direct Download Link</a>`,
                        parseMode: "html",
                        linkPreview: false,
                    });
                    await client.deleteMessages(update.chatId!, [toDel.id], {});
                    await client.sendFile(update.chatId!, {
                        file: video,
                    });
                } catch (error) {
                    console.error(error);
                }

                break;
            }
        }
    },
    new NewMessage({
        async func(ctx) {
            const condition =
                ctx.message.entities?.some(
                    (c) => c.className === "MessageEntityUrl"
                ) || false;

            console.log(condition);

            if (!condition)
                await client.sendMessage(ctx.chatId!, {
                    message:
                        "<b>Usage ❓️</b>:\nPaste the video link here.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / Facebook</i>",
                    parseMode: "html",
                    linkPreview: false,
                });

            return condition;
        },
    })
);
