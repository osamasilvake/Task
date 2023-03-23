import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// load env file based on `mode` in the current working directory.
	// set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '');

	return {
		server: { port: +env.PORT },
		preview: { port: +env.PORT_PREVIEW },
		plugins: [react()]
	};
});
