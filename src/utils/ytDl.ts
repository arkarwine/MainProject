// import { type } from "./types.ts";

export const YoutubeDl = async (yturl: string): Promise<string> => {
    // const api = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${yturl}`;
    // const options: RequestInit = {
    //     method: "GET",
    //     headers: {
    //         "X-RapidAPI-Key":
    //             "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
    //         "X-RapidAPI-Host":
    //             "ytstream-download-youtube-videos.p.rapidapi.com",
    //     },
    // };

    const format = "ba[ext=m4a]";

    const cmd = new Deno.Command("yt-dlp", {
        args: ["-f", format, "--get-url", yturl],
    });
    const { stdout } = await cmd.output();

    const result = new TextDecoder().decode(stdout);

    // const response = await fetch(api, options);
    // const result: YoutubeApi = JSON.parse(await response.text());

    // console.debug(result);

    // const youtube = result.formats.slice(-1)[0].url;
    return result;
};
