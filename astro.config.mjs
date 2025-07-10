import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
                mdx(),
                react(),
                ],
  site: 'https://merakideveloper.com',
  compressHTML: true,
});