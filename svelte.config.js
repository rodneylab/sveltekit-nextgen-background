import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/variables.scss';",
			},
		}),
	],
	kit: {
		adapter: adapter({ precompress: true }),
		prerender: { default: true },
	},
};

export default config;
