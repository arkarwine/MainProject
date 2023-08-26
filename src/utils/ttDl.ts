import { TiktokApi } from "./types.d.ts";

export const TiktokDl = async (tturl: string): Promise<string> => {
    const api = `https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index?url=${tturl}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host":
                "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
        },
    };
    const response = await fetch(api, options);
    const result: TiktokApi = JSON.parse(await response.text());

    // console.debug(result);

    const tiktok = result.video.slice(-1)[0];
    return tiktok;
};
