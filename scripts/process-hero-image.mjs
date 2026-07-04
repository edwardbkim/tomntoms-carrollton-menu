// One-shot hero image pipeline
// Run with: node scripts/process-hero-image.mjs
import sharp from "sharp";
import { mkdir } from "fs/promises";

const HERO_SRC = "C:/Users/edwar/OneDrive/Projects/TomNToms/design-refs/hero-candidates";
const DEST = "public/images/hero";

const JOBS = [
  {
    src: `${HERO_SRC}/strawberrieswhipwaffle.jpg`,
    out: `${DEST}/hero-waffle.webp`,
    // Center crop to 4:5 portrait, warm grade slightly
    width: 900,
    height: 1125,
  },
  {
    src: `${HERO_SRC}/blt-and-bluelemonade.jpg`,
    out: `${DEST}/hero-blt.webp`,
    // Square crop for future use
    width: 900,
    height: 900,
  },
];

await mkdir(DEST, { recursive: true });

for (const job of JOBS) {
  const meta = await sharp(job.src).metadata();
  const srcW = meta.width;
  const srcH = meta.height;

  // Center crop to target ratio
  const targetRatio = job.width / job.height;
  const srcRatio = srcW / srcH;

  let cropW, cropH, left, top;
  if (srcRatio > targetRatio) {
    cropH = srcH;
    cropW = Math.round(srcH * targetRatio);
    left = Math.round((srcW - cropW) / 2);
    top = 0;
  } else {
    cropW = srcW;
    cropH = Math.round(srcW / targetRatio);
    left = 0;
    top = Math.round((srcH - cropH) / 2);
  }

  await sharp(job.src)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width: job.width, withoutEnlargement: true })
    .modulate({ brightness: 1.08, saturation: 1.05 })
    .webp({ quality: 88 })
    .toFile(job.out);

  console.log(`✓ ${job.out}`);
}

console.log("\nHero images processed.");
