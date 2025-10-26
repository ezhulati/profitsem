import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const outputDir = join(process.cwd(), '.vercel/output/static');
const sitemap0Path = join(outputDir, 'sitemap-0.xml');
const sitemapIndexPath = join(outputDir, 'sitemap-index.xml');
const sitemapPath = join(outputDir, 'sitemap.xml');

try {
  // Check if sitemap-0.xml exists
  if (existsSync(sitemap0Path)) {
    console.log('Creating single sitemap.xml from sitemap-0.xml');

    // Copy sitemap-0.xml to sitemap.xml
    const sitemapContent = readFileSync(sitemap0Path, 'utf-8');
    writeFileSync(sitemapPath, sitemapContent);

    // Remove sitemap-0.xml and sitemap-index.xml
    unlinkSync(sitemap0Path);
    if (existsSync(sitemapIndexPath)) {
      unlinkSync(sitemapIndexPath);
    }

    console.log('✓ Single sitemap.xml created successfully!');
  } else {
    console.log('sitemap-0.xml not found, skipping sitemap consolidation');
  }
} catch (error) {
  console.error('Failed to consolidate sitemap:', error.message);
  process.exit(1);
}
