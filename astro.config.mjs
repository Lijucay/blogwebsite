import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from "rehype-pretty-code";
// https://astro.build/config
export default defineConfig({
    vite: {
        experimental: {
            inspector: true
        },
        plugins: [
            tailwindcss()
        ]
    },
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: 'material-theme-ocean',
                    keepBackground: false
                }
            ]
        ],
    },
    output: "static",
    integrations: [tailwindcss(), react(), mdx()]
});