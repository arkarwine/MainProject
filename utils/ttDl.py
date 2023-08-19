import json
import logging

from fetch import fetch


async def TiktokDownload(link, logger: logging.Logger = logging):
    url = "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index"

    querystring = {"url": link}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
    }

    response = json.loads(await fetch("GET", url, headers=headers, params=querystring))

    logger.debug(json.dumps(response, indent=4))

    return response["video"][-1]
