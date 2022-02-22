import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';",
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [imagetools({ force: true })],
    },
  },
};

export default config;
