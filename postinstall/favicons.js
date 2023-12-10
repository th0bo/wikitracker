
const fs = require("fs");
const path = require("path");
const { convertFile } = require("convert-svg-to-png");

console.log('generate-favicons start');

const publicFolderPath = "public";
if (!fs.existsSync(publicFolderPath)) {
  fs.mkdirSync(publicFolderPath);
}
const faviconFolderPath = path.join("public", "favicon");
if (!fs.existsSync(faviconFolderPath)) {
  fs.mkdirSync(faviconFolderPath);
}
const darkFaviconFolderPath = path.join("public", "favicon", "dark");
if (!fs.existsSync(darkFaviconFolderPath)) {
  fs.mkdirSync(darkFaviconFolderPath);
}
const lightFaviconFolderPath = path.join("public", "favicon", "light");
if (!fs.existsSync(lightFaviconFolderPath)) {
  fs.mkdirSync(lightFaviconFolderPath);
}

[
  ["favicon-dark.svg", darkFaviconFolderPath],
  ["favicon-light.svg", lightFaviconFolderPath],
].forEach(async ([svgFileName, faviconFolderPath]) => {
  const inputFilePath = path.join("assets", "svg", svgFileName);
  await Promise.all([16, 32, 48].map(size => {
    const outputFilePath = `${faviconFolderPath}/${size}x${size}.png`;
    return convertFile(inputFilePath, { outputFilePath, width: size, height: size });
  }))
});

console.log('generate-favicons end');