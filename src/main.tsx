import './i18n/i18n';
import '@assets/scss/main.scss';
import '@assets/fonts/index';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

// import App from '@/App.1';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
