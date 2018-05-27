const fs = require('fs');
const glob = require('glob');
const Spritesmith = require('spritesmith');
const templater = require('spritesheet-templates');
//
const assetIcons16 = glob.sync('src/assets/icons/asset-icons-16/*.png');
const assetIcons32 = glob.sync('./src/assets/icons/asset-icons-32/*.png');
const exchangeIcons16 = glob.sync('./src/assets/icons/exchange-icons-16/*.png');
const exchangeIcons32 = glob.sync('./src/assets/icons/exchange-icons-32/*.png');

const spritesConfig = [
  {
    icons: assetIcons16.slice(0, Math.ceil(assetIcons16.length/2)),
    spritePath: 'src/assets/sprites/asset-icons-sprites-16-1.png',
    spritePathSCSS: '../../assets/sprites/asset-icons-sprites-16-1.png',
    scssPath: 'src/scss/icons/asset-icons-16-1.scss',
    scssClassName: 'asset16'
  },
  {
    icons: assetIcons16.slice(Math.ceil(assetIcons16.length/2)),
    spritePath: 'src/assets/sprites/asset-icons-sprites-16-2.png',
    spritePathSCSS: '../../assets/sprites/asset-icons-sprites-16-2.png',
    scssPath: 'src/scss/icons/asset-icons-16-2.scss',
    scssClassName: 'asset16'
  }
  // {
  //   icons: assetIcons32.slice(0, Math.ceil(assetIcons32.length/2)),
  //   spritePath: 'src/assets/sprites/asset-icons-sprites-32-1.png',
  //   spritePathSCSS: '../../assets/sprites/asset-icons-sprites-32-1.png',
  //   scssPath: 'src/scss/icons/asset-icons-32-1.scss',
  //   scssClassName: 'asset32'
  // },
  // {
  //   icons: assetIcons32.slice(Math.ceil(assetIcons32.length/2)),
  //   spritePath: 'src/assets/sprites/asset-icons-sprites-32-2.png',
  //   spritePathSCSS: '../../assets/sprites/asset-icons-sprites-32-2.png',
  //   scssPath: 'src/scss/icons/asset-icons-32-2.scss',
  //   scssClassName: 'asset32'
  // },
  // {
  //   icons: exchangeIcons16,
  //   spritePath: 'src/assets/sprites/exchange-icons-sprites-16.png',
  //   spritePathSCSS: '../../assets/sprites/exchange-icons-sprites-16.png',
  //   scssPath: 'src/scss/icons/exchange-icons-16.scss',
  //   scssClassName: 'exchange16'
  // },
  // {
  //   icons: exchangeIcons32,
  //   spritePath: 'src/assets/sprites/exchange-icons-sprites-32.png',
  //   spritePathSCSS: '../../assets/sprites/exchange-icons-sprites-32.png',
  //   scssPath: 'src/scss/icons/exchange-icons-32.scss',
  //   scssClassName: 'exchange32'
  // }
];

spritesConfig.forEach((elem) => {
  generateSprite(elem);
});

function generateSprite(elem) {
  Spritesmith.run({
    src: elem.icons,
  }, function(err, result) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const {coordinates, properties, image} = result;
    const sprites = [];
    Object.keys(coordinates).forEach((path) => {
      let name = elem.scssClassName + '-' + prepareName(path);
      sprites.push({
          ...coordinates[path],
        name
      });
    });

    fs.writeFileSync(elem.spritePath, image);

    const scss = templater({
      sprites: sprites,
      spritesheet: {
        ...properties,
        image: elem.spritePathSCSS
      }
    }, {format: 'css'});

    fs.writeFileSync(elem.scssPath, scss);
  });
}

// _CON => CON
// $$$ => \$\$\$
// @ => \@
function prepareName(path) {
  let name = path.split('/').pop();
  name = name.indexOf('_') == 0 ? name.substring(1) : name;
  return name
    .replace(/\..*$/, '')
    .replace(/ /, '')
    .replace(/\(/, '')
    .replace(/\)/, '')
    .replace(/\$/g, '\\$')
    .replace(/\@/g, '\\@');
}
