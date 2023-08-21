// import { type } from "./types.ts";

export const YoutubeDl = async (yturl: string): Promise<string | undefined> => {
    const id = yturl.match(
        /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/i
    )![1];

    const api = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${id}`;
    const options: RequestInit = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host":
                "ytstream-download-youtube-videos.p.rapidapi.com",
        },
    };
    const response = await fetch(api, options);
    const result /*: type */ = JSON.parse(await response.text());

    // console.debug(result);

    const youtube = result.formats.slice(-1)[0].url;
    return youtube;
};
