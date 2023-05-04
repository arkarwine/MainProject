export const TiktokDl = async (tturl: string): Promise<string> => {
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
    const res = JSON.parse(await response.text());
    const tiktok: string = res.result.video.url_list.slice(1);
    return tiktok;
};
