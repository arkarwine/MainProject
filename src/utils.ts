import { TiktokApi } from "./types.ts";

export const TiktokDl = async (tturl: string): Promise<string | undefined> => {
    const url = `https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/?link=${tturl}`;
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host":
                "tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com",
        },
    };
    const response = await fetch(url, options);
    const res: TiktokApi = JSON.parse(await response.text());
    const tiktok = res.result?.video?.url_list?.slice(0)[0];
    return tiktok;
};

export function fixUrl(url: string) {
    if (!url.startsWith("https://")) url = "https://" + url;
    return url;
}
