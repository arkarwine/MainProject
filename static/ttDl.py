import json

import requests


def TiktokDownload(link):
    url = "https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/"

    querystring = {"link": link}

    headers = {
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com",
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    test = json.loads(response.text)

    assert test["ok"]

    dlLink = test["result"]["video"]["url_list"][2]

    return dlLink

    return dlLink
