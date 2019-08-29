const fs = require('fs');
const inputDir = './inputFiles';

const outputDirName = 'flags';
const outputDir = `./src/${outputDirName}`;

const dirContents = fs.readdirSync(inputDir);

const jsIndexLogger = fs.createWriteStream('./src/index.js', {
  flags: 'w',
});

const typeIndexLogger = fs.createWriteStream('./src/index.d.ts', {
  flags: 'w',
});

typeIndexLogger.write(`/// <reference types="react" />\nimport { ComponentType, SVGAttributes } from 'react';\n\ninterface Props extends SVGAttributes<SVGElement> {
\width?: string | number;\nheight?: string | number;\n}\n\ntype Flag = ComponentType<Props>;\n`);

for (const flag of dirContents) {
  if (flag.split('.')[1] === 'svg') {
    const flagName = flag.replace('-', '').split('.')[0];
    convertSVGtoComponents(flag, flagName);
    convertFlagnameToIndex(flagName);
  }
}

function convertSVGtoComponents(flag, flagName) {
  const reactTemplate = fs.readFileSync('./stubs/component.stub.js', 'utf-8');
  let flagSVG = fs.readFileSync(`./${inputDir}/${flag}`, 'utf-8');
  flagSVG = flagSVG.replace(
    /<svg (.*) xmlns/gm,
    '<svg width={width} height={height} viewBox="0 0 21 15" {...otherProps} xmlns',
  );

  flagSVG = flagSVG.replace(/xmlns:xlink/gm, 'xmlnsXlink');
  flagSVG = flagSVG.replace(/xlink:href/gm, 'xlinkHref');

  let flagComponentData = reactTemplate;
  flagComponentData = flagComponentData.replace(/FLAGNAME/g, flagName);
  flagComponentData = flagComponentData.replace('FLAGSVG', flagSVG);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  fs.writeFileSync(`./src/flags/${flagName}.js`, flagComponentData);
}

function convertFlagnameToIndex(flagName) {
  jsIndexLogger.write(
    `export { default as ${flagName} } from './${outputDirName}/${flagName}';\n`,
  );
  typeIndexLogger.write(`export const ${flagName}: Flag;\n`);
}
