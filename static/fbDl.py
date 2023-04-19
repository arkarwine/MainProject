import requests


def FbDownload(link):
    url = "https://facebook17.p.rapidapi.com/api/facebook/links"

    payload = {"url": link}
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3d28911b5emshfa3878e04bad055p1d8d4ajsn3656fe6360e3",
        "X-RapidAPI-Host": "facebook17.p.rapidapi.com",
    }

    response = requests.request("POST", url, json=payload, headers=headers).json()[0][
        "urls"
    ][0]["url"]

    return response
