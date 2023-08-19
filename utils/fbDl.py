import json
import logging

from utils.fetch import fetch


async def FbDownload(link, logger: logging.Logger = logging):
    url = "https://facebook17.p.rapidapi.com/api/facebook/links"

    payload = {"url": link}
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "facebook17.p.rapidapi.com",
    }

    response = json.loads(await fetch("POST", url, json=payload, headers=headers))

    logger.debug(json.dumps(response, indent=4))

    return response[0]["url"]
