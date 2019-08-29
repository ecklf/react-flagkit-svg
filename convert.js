const fs = require('fs');

const inputDir = './inputFiles';

const outputDirName = 'flags';
const outputDir = `./src/${outputDirName}]`;

const dirContents = fs.readdirSync(inputDir);
const reactTemplate = fs.readFileSync('./template.js', 'utf-8');

for (const flag of dirContents) {
  if (flag.split('.')[1] === 'svg') {
    const flagName = flag.replace('-', '').split('.')[0];
    let flagSVG = fs.readFileSync(`./${inputDir}/${flag}`, 'utf-8');
    flagSVG = flagSVG.replace(
      /<svg (.*) xmlns/gm,
      '<svg width={width} height={height} {...otherProps} xmlns',
    );

    let flagComponentData = reactTemplate;
    flagComponentData = flagComponentData.replace(/FLAGNAME/g, flagName);
    flagComponentData = flagComponentData.replace('FLAGSVG', flagSVG);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(`./src/flags/${flagName}.js`, flagComponentData);
  }
}
