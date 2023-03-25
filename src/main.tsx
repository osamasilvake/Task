import './i18n/i18n';
import './../public/assets/scss/main.scss';
import './fonts/index';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
