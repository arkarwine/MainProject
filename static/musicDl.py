import json
import re

import requests


def YTmusicDownload(link):
    pattern = "\??(?:%3D|v=|vi=)([0-9a-zA-Z_-]*)(?:[%#?&]|$)"

    _id = re.search(pattern, link).groups()[0]

    url = "https://youtube-music1.p.rapidapi.com/get_download_url"

    querystring = {"id": _id, "ext": "mp3"}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    }

    response = json.loads(
        requests.request("GET", url, headers=headers, params=querystring).text
    )["result"]["download_url"]

    return response
    return response
