
const fs = require("fs");
const path = require("path");
const { convertFile } = require("convert-svg-to-png");

console.log('generate-favicons start');

const publicFolderPath = path.join(__dirname, 'public');
if (!fs.existsSync(publicFolderPath)) {
  fs.mkdirSync(publicFolderPath);
}
const faviconFolderPath = path.join(__dirname, "public", "favicon");
if (!fs.existsSync(faviconFolderPath)) {
  fs.mkdirSync(faviconFolderPath);
}

(async () => {
  const inputFilePath = path.join(__dirname, "assets", "svg", "favicon.svg");
  await Promise.all([16, 32, 48].map(size => {
    const outputFilePath = `${faviconFolderPath}/${size}x${size}.png`;
    return convertFile(inputFilePath, { outputFilePath, width: size, height: size });
  }))
})();

console.log('generate-favicons end');