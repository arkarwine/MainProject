import asyncio

from ttDl import TiktokDownload


async def main():
    print(await TiktokDownload("https://vt.tiktok.com/ZSLbvGtbk/"))


asyncio.run(main())
