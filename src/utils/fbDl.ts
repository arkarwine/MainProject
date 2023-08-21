// import { type } from "./types.ts";

export const FacebookDl = async (
    fburl: string
): Promise<string | undefined> => {
    const api = `https://facebook17.p.rapidapi.com/api/facebook/links`;
    const options: RequestInit = {
        method: "POST",
        body: JSON.stringify({ url: fburl }),
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
                "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
            "X-RapidAPI-Host": "facebook17.p.rapidapi.com",
        },
    };
    const response = await fetch(api, options);
    const result /*: type */ = JSON.parse(await response.text());

    // console.debug(result);

    const facebook = result[0].urls[0].url;
    return facebook;
};
