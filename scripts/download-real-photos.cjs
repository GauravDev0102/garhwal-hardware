const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const products = [
  { id: 1, query: 'pvc-pipe' },
  { id: 2, query: 'pipe' },
  { id: 3, query: 'pipe-fitting' },
  { id: 4, query: 'plumbing-elbow' },
  { id: 5, query: 'pipe-connector' },
  { id: 6, query: 'ball-valve' },
  { id: 7, query: 'water-tank' },
  { id: 8, query: 'rooftop-tank' },
  { id: 9, query: 'industrial-tank' },
  { id: 10, query: 'small-tank' },
  { id: 11, query: 'steel-stand' },
  { id: 12, query: 'steel-pipe' },
  { id: 13, query: 'flexible-hose' },
  { id: 14, query: 'teflon-tape' },
  { id: 15, query: 'brass-valve' },
  { id: 16, query: 'glue-bottle' },
  { id: 17, query: 'pipe-clamp' },
  { id: 18, query: 'basin-faucet' },
  { id: 19, query: 'shower-head' },
  { id: 20, query: 'angle-valve' },
  { id: 21, query: 'flush-cistern' },
  { id: 22, query: 'ceramic-sink' },
  { id: 23, query: 'towel-rail' },
  { id: 24, query: 'water-pump' },
  { id: 25, query: 'submersible-pump' },
  { id: 26, query: 'booster-pump' },
  { id: 27, query: 'pressure-controller' },
  { id: 28, query: 'motor-starter' },
  { id: 29, query: 'copper-wire' },
  { id: 30, query: 'circuit-breaker' },
  { id: 31, query: 'light-switch' },
  { id: 32, query: 'led-bulb' },
  { id: 33, query: 'ceiling-fan' },
  { id: 34, query: 'extension-board' },
  { id: 35, query: 'steel-rebar' },
  { id: 36, query: 'cement-bag' },
  { id: 37, query: 'binding-wire' },
  { id: 38, query: 'tower-bolt' },
  { id: 39, query: 'steel-angle' },
  { id: 40, query: 'steel-nails' },
  { id: 41, query: 'steel-hammer' },
  { id: 42, query: 'measuring-tape' },
  { id: 43, query: 'plumber-wrench' },
  { id: 44, query: 'pipe-cutter' },
  { id: 45, query: 'spirit-level' },
  { id: 46, query: 'toolbox-set' },
  { id: 47, query: 'interior-paint' },
  { id: 48, query: 'exterior-paint' },
  { id: 49, query: 'paint-primer' },
  { id: 50, query: 'wall-putty' },
  { id: 51, query: 'enamel-paint' },
  { id: 52, query: 'waterproofing-coating' }
];

const targetDir = path.join(__dirname, '..', 'images', 'products');

function downloadImage(url, filepath, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));

    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        let redirectUrl = response.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const parsed = new URL(url);
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
        }
        return downloadImage(redirectUrl, filepath, maxRedirects - 1).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode} for ${url}`));
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading real photo images for all 52 products...');
  for (const p of products) {
    const filename = `product_real_${p.id}.jpg`;
    const destPath = path.join(targetDir, filename);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 10000) {
      console.log(`[SKIP] Product ${p.id} already exists.`);
      continue;
    }

    const url = `https://loremflickr.com/600/600/${p.query}`;
    try {
      await downloadImage(url, destPath);
      console.log(`[OK] Product ${p.id} (${p.query}) -> ${filename}`);
    } catch (err) {
      console.error(`[ERR] Product ${p.id}: ${err.message}`);
    }
  }
  console.log('Finished processing all 52 real product images!');
}

run();
