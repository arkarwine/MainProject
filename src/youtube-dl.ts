import { URL } from "url"
import execa from "execa"
import { join } from "path"

import { Format, YoutubeDL } from "../types/YoutubeDL"

export interface FilteredFormats {
  video: Format
  audio: Format
  expire: number
  title: string
}

export default class youtubeDL {
  private info = async (src: string): Promise<YoutubeDL> => {
    const { stdout } = await execa(join(__dirname, "../youtube-dl"), ["-j", src])
    return JSON.parse(stdout)
  }

  private filterFormats = ({ formats, title }: YoutubeDL): FilteredFormats => {
    if (!formats) throw new Error("no formats found")
    const video = formats
      .filter(({ vcodec, acodec }) => vcodec !== "none" && acodec !== "none")
      .reverse()[0]
    const audio = formats
      .filter(({ vcodec, acodec }) => vcodec === "none" && acodec !== "none")
      .reverse()[0]
    const expire = Number(new URL(video.url).searchParams.get("expire")) * 1e3

    return { video, audio, expire, title }
  }

  getFormats = async (src: string): Promise<FilteredFormats> => {
    return this.filterFormats(await this.info(src))
  }
}
