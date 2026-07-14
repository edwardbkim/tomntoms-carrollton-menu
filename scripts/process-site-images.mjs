// Polish-pass site image pipeline
// Run with: node scripts/process-site-images.mjs
import sharp from "sharp";
import { mkdir } from "fs/promises";

const BASE = "C:/Users/edwar/OneDrive/Projects/TomNToms";
const REFS = `${BASE}/design-refs`;

const JOBS = [
  // Home hero — exterior storefront
  {
    src: `${REFS}/storefront/exterior-ref.PNG`,
    out: `${BASE}/public/images/hero/cafe-exterior.webp`,
    width: 1400,
    height: null,
    noModulate: true,
  },
  // About page — interior
  {
    src: `${REFS}/storefront/interior-ref.PNG`,
    out: `${BASE}/public/images/gallery/cafe-interior.webp`,
    width: 900,
    height: null,
    noModulate: true,
  },
  // Three-pillar strip: Coffee card
  {
    src: `${REFS}/site-refs/specialtycoffee-ref.PNG`,
    out: `${BASE}/public/images/hero/pillar-coffee.webp`,
    width: 400,
    height: null,
    noModulate: true,
  },
  // Three-pillar strip: Food card
  {
    src: `${REFS}/site-refs/madefreshfood-ref.PNG`,
    out: `${BASE}/public/images/hero/pillar-food.webp`,
    width: 400,
    height: null,
    noModulate: true,
  },
  // Three-pillar strip: Atmosphere card
  {
    src: `${REFS}/site-refs/alldayatmosphere-ref.PNG`,
    out: `${BASE}/public/images/hero/pillar-atmosphere.webp`,
    width: 400,
    height: null,
    noModulate: true,
  },
  // Featured category cards
  {
    src: `${REFS}/site-refs/coffee-espresso-ref.PNG`,
    out: `${BASE}/public/images/categories/cat-coffee.webp`,
    width: 900,
    height: null,
    noModulate: true,
  },
  {
    src: `${REFS}/site-refs/specialtydrinks-ref.PNG`,
    out: `${BASE}/public/images/categories/cat-specialty.webp`,
    width: 900,
    height: null,
    noModulate: true,
  },
  {
    src: `${REFS}/site-refs/snowflakes-ref.PNG`,
    out: `${BASE}/public/images/categories/cat-snowflakes.webp`,
    width: 900,
    height: null,
    noModulate: true,
  },
  // Download the App section — rewards app QR code
  {
    src: `${REFS}/app/app-qr-ref.PNG`,
    out: `${BASE}/public/images/app/app-qr.webp`,
    width: 480,
    height: null,
    noModulate: true,
  },
];

await mkdir(`${BASE}/public/images/hero`, { recursive: true });
await mkdir(`${BASE}/public/images/gallery`, { recursive: true });
await mkdir(`${BASE}/public/images/categories`, { recursive: true });
await mkdir(`${BASE}/public/images/app`, { recursive: true });

for (const job of JOBS) {
  let pipeline = sharp(job.src);
  pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });
  if (!job.noModulate) {
    pipeline = pipeline.modulate({ brightness: 1.08, saturation: 1.05 });
  }
  await pipeline.webp({ quality: 90 }).toFile(job.out);
  console.log(`✓ ${job.out}`);
}

console.log("\nSite images processed.");
