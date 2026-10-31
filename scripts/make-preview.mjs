// Builds ./preview.html: ONE self-contained file (HTML + CSS + JS inlined) from the static export.
// Usage: npm run preview
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";

await build({ entryPoints: ["scripts/preview-entry.js"], bundle: true, minify: true, format: "iife", outfile: ".preview/p.js", logLevel: "error" });
const js = fs.readFileSync(".preview/p.js", "utf8").replace(/<\/script>/g, "<\\/script>");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const css = walk("out/_next").filter((f) => f.endsWith(".css")).map((f) => fs.readFileSync(f, "utf8")).join("\n");
let html = fs.readFileSync("out/index.html", "utf8");
html = html
  .replace(/<link[^>]+rel="stylesheet"[^>]*>/g, "")
  .replace(/<link[^>]+rel="preload"[^>]*>/g, "")
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace("</head>", () => `<style>${css}</style></head>`)
  .replace("</body>", () => `<script>${js}</script></body>`);
// inline images so preview.html is one self-contained file
html = html.replace(/\/img\/([a-z]+)\.jpg/g, (m, n) => "data:image/jpeg;base64," + fs.readFileSync(`public/img/${n}.jpg`).toString("base64"));
fs.writeFileSync("preview.html", html);
console.log("preview.html written", (html.length / 1024).toFixed(0) + " KB");
