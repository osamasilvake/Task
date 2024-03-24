/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				101: '#5235E8',
				102: '#E2E8F0',
				103: '#696969 '
			},
			width: {
				201: '32.4rem',
				202: '27rem'
			},
			maxWidth: {
				301: '76.25rem'
			},
			fontSize: {
				501: '3.563rem',
				502: '1.188rem'
			}
		},
		borderRadius: {
			401: '2.25rem'
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
