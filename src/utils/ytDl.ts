// import { type } from "./types.ts";

export const YoutubeDl = async (yturl: string): Promise<string> => {
    const format = "ba[ext=m4a]";

    const cmd = new Deno.Command("yt-dlp", {
        args: ["-f", format, "--get-url", yturl],
    });
    const { stdout } = await cmd.output();

    const result = new TextDecoder().decode(stdout);

    return result;
};
