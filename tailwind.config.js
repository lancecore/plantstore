/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				newpurple: {
					50: '#F8F5FE',
					100: '#F0ECFE',
					200: '#E1D9FC',
					300: '#D2C6FB',
					400: '#C0AEF9',
					500: '#A991F7',
					600: '#9A7FF6',
					700: '#8867F4',
					800: '#6E46F1',
					900: '#4211E4',
					950: '#330DB0',
				},
				newgreen: {
					50: '#FBFEFC',
					100: '#F2FDF6',
					200: '#E9FBEF',
					300: '#DCF9E6',
					400: '#D3F8DF',
					500: '#C5F5D5',
					600: '#81E9A4',
					700: '#25D560',
					800: '#1FB250',
					900: '#167E39',
					950: '#105B29',
				},
				newpink: {
					50: '#FFF5F9',
					100: '#FFEBF4',
					200: '#FFD6E9',
					300: '#FFB8D8',
					400: '#FF99C7',
					500: '#FF6BAD',
					600: '#FF479A',
					700: '#F5006E',
					800: '#D1005E',
					900: '#990045',
					950: '#66002E',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
