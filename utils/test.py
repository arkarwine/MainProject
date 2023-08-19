import asyncio
import logging

from ttDl import TiktokDownload

logging.basicConfig(level=logging.DEBUG)


async def main():
    print(await TiktokDownload("https://vm.tiktok.com/ZM2oHey9n/"))


asyncio.run(main())
