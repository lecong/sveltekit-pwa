import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import svgSprite from 'rollup-plugin-stdf-icon';

export default defineConfig({
	plugins: [
		sveltekit(),
		svgSprite(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
