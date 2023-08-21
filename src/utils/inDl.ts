// import { type } from "./types.ts";

export const InstagramDl = async (
    inurl: string
): Promise<string | undefined> => {
    const api = `https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=${inurl}`;
    const options: RequestInit = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host":
                "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
        },
    };
    const response = await fetch(api, options);
    const result /*: type */ = JSON.parse(await response.text());

    // console.debug(result);

    const tiktok = result.media;
    return tiktok;
};
