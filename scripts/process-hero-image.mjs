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
    // Banked — not currently in use
    width: 900,
    height: 1125,
  },
  {
    src: `${HERO_SRC}/blt-and-bluelemonade.jpg`,
    out: `${DEST}/hero-blt.webp`,
    // Banked — not currently in use
    width: 900,
    height: 900,
  },
  {
    src: `${HERO_SRC}/hero-candidate.png`,
    out: `${DEST}/hero-candidate.webp`,
    // Full 16:9 tableau — no crop, resize to 1400px wide
    width: 1400,
    height: null, // preserve aspect ratio
    noModulate: true, // warm cream background; no grading needed
  },
];

await mkdir(DEST, { recursive: true });

for (const job of JOBS) {
  const meta = await sharp(job.src).metadata();
  const srcW = meta.width;
  const srcH = meta.height;

  let pipeline = sharp(job.src);

  if (job.height !== null) {
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
    pipeline = pipeline.extract({ left, top, width: cropW, height: cropH });
  }

  pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });

  if (!job.noModulate) {
    pipeline = pipeline.modulate({ brightness: 1.08, saturation: 1.05 });
  }

  await pipeline.webp({ quality: 90 }).toFile(job.out);

  console.log(`✓ ${job.out}`);
}

console.log("\nHero images processed.");
