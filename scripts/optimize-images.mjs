import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, parse } from 'path';

const INPUT_DIR = './docs/imgs';
const OUTPUT_DIR = './public/images';
const MAX_WIDTH = 2000;
const QUALITY = 80;

async function optimizeImages() {
  // Create output directory if it doesn't exist
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  // Get all files in input directory
  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(
    (f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f) && !f.startsWith('.')
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const { name } = parse(file);
    // Sanitize filename: lowercase, replace spaces with hyphens
    const safeName = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '');
    const outputPath = join(OUTPUT_DIR, `${safeName}.webp`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      const originalSize = metadata.size || 0;
      totalOriginal += originalSize;

      // Resize if wider than MAX_WIDTH, convert to webp
      let pipeline = image;
      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      const { size } = await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

      totalOptimized += size;
      const savings = ((1 - size / originalSize) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(
        `  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(size / 1024).toFixed(0)}KB (${savings}% smaller)\n`
      );
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}\n`);
    }
  }

  console.log('─'.repeat(50));
  console.log(
    `Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB`
  );
  console.log(`Saved: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`\nOptimized images saved to ${OUTPUT_DIR}`);
}

optimizeImages().catch(console.error);
