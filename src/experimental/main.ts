import {
    Innertube,
    UniversalCache,
} from "https://deno.land/x/youtubei@v6.2.0-deno/deno.ts";

const client = await Innertube.create({
    cache: new UniversalCache(true, "."),
});

const res = await client.getInfo("NkBjYXPJwj4");

Deno.writeTextFile("res.json", JSON.stringify(res));

console.log(res.streaming_data);
