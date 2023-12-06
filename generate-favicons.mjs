import cstp from "convert-svg-to-png";
const { convertFile } = cstp;

console.log('generate-favicons start');

(async () => {
  const inputFilePath = "./assets/svg/favicon.svg";
  await Promise.all([16, 32, 48].map(size => {
    const outputFilePath = `./public/favicon-${size}x${size}.png`;
    return convertFile(inputFilePath, { outputFilePath, width: size, height: size });
  }))
})();

console.log('generate-favicons end');