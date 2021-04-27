/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const bold = (s: string) => `<b>${s}</b>`

const strings = {
  start: (name: string) =>
    `hello ${name}\n\njust send me a <b>youtube</b> link and i'll give you the choice of downloading it as video or audio.`,
  startDescription: () => `send the welcome message again`,
  unsupported: () => `sorry, i don't know how to download that yet.`,
  formatSelection: (video?: string) =>
    `download${video ? " " + bold(video) : ""} as audio or video?`,
  downloading: (add?: string) => `downloading${add ? " " + add : ""}...`,
  error: () => `something went wrong.`,
  overSize: (type: string, url: string) =>
    `unfortunately, telegram bots can only upload files up to 50MB, and your ${type} is larger than that.\n` +
    `please visit the link and long-press or right-click and select "download" or "save as"\n\n` +
    `direct video link: ${url}`,
}

export default strings
