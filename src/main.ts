import {
    NewMessage,
    NewMessageEvent,
    StringSession,
    TelegramClient,
} from "https://deno.land/x/grm@0.8.2/mod.ts";
import { FacebookDl } from "./utils/fbDl.ts";
import { InstagramDl } from "./utils/igDl.ts";
import { TiktokDl } from "./utils/ttDl.ts";
import { YoutubeDl } from "./utils/ytDl.ts";

const BOT_TOKEN = "5618691960:AAETR5IfqyZOIcZ5Cgst1KX8JYY7wpighU0"; // put your bot token here

const client = new TelegramClient(
    new StringSession(
        "1BQANOTEuMTA4LjU2LjE4OQG7mquGjxaY5yJZ4eYUOmXE2AuJmwk1D0tFo8ubz0m62ke8SzMjyvHaM27lTcL0zHpugagfn0f1fTiuIJrOYK5BkvqbJzSvyBNSY9Bb47muohE/FR6oYeAsPRWgKL/80/NwYyhtN9o5ug6uDBP9Aom00AEUefaEQelyHNDnDAXIcjbvuRbg80G5iAX3LXataAdOtDqbFhZCtbJ67oITV6dEcx0nwt0cR+AS1iiYp5BfMS3F1dwY+YfcNQbVkstjryKxSjCT1mJpoAkh2nbPsumRlbhbF8VBezg2uKQo6jTkAwsU5jSEZYgjO6+9rQm2itRIjWVTCv/aJtsX+RSc1BxmQQ=="
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
        const text = update.message?.text!;

        const re = [
            {
                regex: /((?:https?:\/\/)?(?:www\.)?(?:fb|mbasic.facebook|m\.facebook|facebook|fb)\.(?:com|me|watch)\/[\w@\/]+)/i,
                downloader: FacebookDl,
            },
            {
                regex: /((?:https?:\/\/)?(?:www\.)?(?:instagram.com|instagr.am|instagr.com)\/[\w@\/]+)/i,
                downloader: InstagramDl,
            },
            {
                regex: /((?:(?:https?:)?(?:\/\/)?)?(?:(?:www|vt|vm)\.)(?:tiktok\.com)\/[\w@\/]+)/i,
                downloader: TiktokDl,
            },
            {
                regex: /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/i,
                downloader: YoutubeDl,
            },
        ] as const;

        for (const r of re) {
            const url = text.match(r.regex);

            console.log(url);

            if (url !== null) {
                const toDel = await client.sendMessage(update.chatId!, {
                    message: "Loading ...",
                });
                const video = encodeURI((await r.downloader(url[1])) as string);

                console.log(`<a href="${video}">Direct Download Link</a>`);

                try {
                    await client.sendMessage(update.chatId!, {
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
        func(ctx) {
            const condition =
                ctx.message.entities?.some(
                    (c) => c.className === "MessageEntityUrl"
                ) || false;

            console.log(condition);

            if (!condition)
                client.sendMessage(ctx.chatId!, {
                    message:
                        "<b>Usage ❓️</b>:\nPaste the video link here.\ne.g. \n<pre>https://youtu.be/exam-ple/</pre>\n\n<b>Supported Links 🔗</b>:\n<i>Tiktok / Youtube / Instagram / Facebook</i>",
                    parseMode: "html",
                    linkPreview: false,
                });

            return condition;
        },
    })
);
