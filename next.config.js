/** @type {import('next').NextConfig} */
module.exports = {
  output: "export", // fully static site -> ./out
  images: { unoptimized: true },
  trailingSlash: true,
};
