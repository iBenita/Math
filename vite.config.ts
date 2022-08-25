import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    server: {
        host: '0.0.0.0'
    },
    plugins: [svelte(), Unocss()],
    build: {
        outDir: 'docs'
    }
})
