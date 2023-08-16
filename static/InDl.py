import json
import logging

import requests


def InstaDownload(link, logger: logging.Logger = logging):
    url = "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index"

    querystring = {"url": link}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
    }

    response = json.loads(
        requests.request("GET", url, headers=headers, params=querystring).text
    )

    logger.debug(json.dumps(response, indent=4))

    return response["media"]
