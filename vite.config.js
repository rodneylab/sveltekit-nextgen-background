import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@use 'variables.scss';",
				loadPaths: ['src/lib/styles'],
			},
		},
	},
	plugins: [sveltekit(), imagetools()],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
});
