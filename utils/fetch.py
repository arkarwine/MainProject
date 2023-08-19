import aiohttp


async def fetch(method, url, **kwargs):
    async with aiohttp.ClientSession() as session:
        async with session.request(method, url, **kwargs) as response:
            return await response.text()
