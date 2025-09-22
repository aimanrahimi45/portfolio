const fs = require('fs');
const path = require('path');
const https = require('https');

const models = [
  { name: 'lens.glb', url: 'https://raw.githubusercontent.com/reactbits/ui/main/public/assets/3d/lens.glb' },
  { name: 'bar.glb', url: 'https://raw.githubusercontent.com/reactbits/ui/main/public/assets/3d/bar.glb' },
  { name: 'cube.glb', url: 'https://raw.githubusercontent.com/reactbits/ui/main/public/assets/3d/cube.glb' }
];

const targetDir = path.join(__dirname, 'public', 'assets', '3d');

// Create directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file async
      reject(err);
    });
  });
}

async function downloadModels() {
  console.log('Downloading 3D models...');
  
  for (const model of models) {
    const filePath = path.join(targetDir, model.name);
    try {
      await downloadFile(model.url, filePath);
      console.log(`✓ Downloaded ${model.name}`);
    } catch (error) {
      console.log(`✗ Failed to download ${model.name}: ${error.message}`);
    }
  }
  
  console.log('Download process completed.');
}

downloadModels().catch(console.error);