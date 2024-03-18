import type { Preview } from '@storybook/react';
import customTheme from './mooyaTheme';

import '../src/app/globals.scss';

const preview: Preview = {
	parameters: {
		docs: {
			theme: customTheme,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
