import run from "@xyz/esbuild";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
