import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
	],
	extensions: ['.svelte'],
	kit: {
		prerender: {
			handleMissingId: 'ignore',
			entries: ['*'],
		},
		adapter: adapter(),
		paths: {
			base: '',
		},
	},
};

export default config;
