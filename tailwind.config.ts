import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--c-background)',
				heart: {
					solid: 'var(--c-heart-solid)',
					'solid-hover': 'var(--c-heart-solid-hover)',
					border: 'var(--c-heart-border)',
					'border-hover': 'var(--c-heart-border-hover)',
					background: 'var(--c-heart-background)',
					'background-hover': 'var(--c-heart-background-hover)',
					text: 'var(--c-heart-text)',
					foreground: 'var(--c-heart-foreground)',
				},
			},
		},
	},
	plugins: [],
};
export default config;
