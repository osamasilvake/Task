import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { configDefaults } from 'vitest/config';

const configuration = defineConfig(({ mode }) => {
	// load env file based on `mode` in the current working directory.
	// set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		logLevel: 'error',
		server: { port: +env.VITE_PORT, open: false },
		preview: { port: +env.VITE_PORT_PREVIEW, open: false },
		test: {
			globals: true,
			exclude: [...configDefaults.exclude]
		}
	};
});
export default configuration;
