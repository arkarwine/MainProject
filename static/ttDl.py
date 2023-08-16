import json
import logging

import requests


def TiktokDownload(link, logger: logging.Logger = logging):
    url = "https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/"

    querystring = {"link": link}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com",
    }

    response = json.loads(
        requests.request("GET", url, headers=headers, params=querystring).text
    )

    logger.debug(json.dumps(response, indent=4))

    assert response["ok"]

    return response["result"]["video"]["url_list"][2]
