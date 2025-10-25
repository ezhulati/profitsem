import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const configPath = join(process.cwd(), '.vercel/output/functions/_render.func/.vc-config.json');

try {
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));

  if (config.runtime === 'nodejs18.x') {
    console.log('Fixing runtime from nodejs18.x to nodejs20.x');
    config.runtime = 'nodejs20.x';
    writeFileSync(configPath, JSON.stringify(config, null, '\t'));
    console.log('Runtime fixed successfully!');
  } else {
    console.log(`Runtime is already ${config.runtime}`);
  }
} catch (error) {
  console.error('Failed to fix runtime:', error.message);
  process.exit(1);
}
