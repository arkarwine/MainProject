// import { type } from "./types.ts";

export const UtilFn = async (tturl: string): Promise<string | undefined> => {
    const api = `https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index?url=${tturl}`;
    const options: RequestInit = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host":
                "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
        },
    };
    const response = await fetch(api, options);
    const result /*: type */ = JSON.parse(await response.text());
    const tiktok = result.video.slice(-1)[0];
    return tiktok;
};
