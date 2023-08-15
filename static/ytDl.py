import json
import re

import requests


def YTdownload(link):
    get = f'<a href="{link}">Some text</a>'
    pattern = re.compile(
        r"""https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?:[?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*""",
        re.IGNORECASE,
    )
    _id = re.search(pattern, get).groups()[0]

    url = "https://ytstream-download-youtube-videos.p.rapidapi.com/dl"

    querystring = {"id": _id}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
    }

    response = json.loads(
        requests.request("GET", url, headers=headers, params=querystring).text
    )

    assert response["status"] == "OK"

    dlLink = response["formats"][-1]["url"]

    return dlLink