// import { type } from "./types.ts";

import { InstagramApi } from "./types.d.ts";

export const InstagramDl = async (inurl: string): Promise<string> => {
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
    const result: InstagramApi = JSON.parse(await response.text());

    // console.debug(result);

    const instagram = result.media[0].media;
    return instagram;
};
