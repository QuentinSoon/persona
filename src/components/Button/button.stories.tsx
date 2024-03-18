import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
	title: 'Library/Button/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="grid grid-cols-2 h-full w-full">
				<div className="light bg-background flex items-center justify-center p-6">
					<Story />
				</div>
				<div className="dark bg-background flex items-center justify-center p-6">
					<Story />
				</div>
			</div>
		),
	],
} as Meta<typeof Button>;

export const Default = (props: ButtonProps) => <Button size="md" {...props} />;
