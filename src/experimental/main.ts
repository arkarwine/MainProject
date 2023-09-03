const format = "ba[ext=m4a]";
const yturl = "7PYe57MwxPI";

const cmd = new Deno.Command("yt-dlp", {
    args: ["-f", format, "--get-url", yturl],
});
const { stdout } = await cmd.output();

console.log(new TextDecoder().decode(stdout));
