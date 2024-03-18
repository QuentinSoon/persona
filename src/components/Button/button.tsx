'use client';

import { cn } from '@/libs/cn';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import {
	ButtonColorProps,
	ButtonRoundedProps,
	ButtonSizeProps,
	ButtonVariantProps,
} from '.';
import './button.scss';

export type ButtonProps = PropsWithChildren<{
	/**
	 * The variant of the button
	 * @default solid
	 */
	variant?: ButtonVariantProps;
	/**
	 * The size of the button
	 * @default md
	 */
	size?: ButtonSizeProps;
	/**
	 * The color of the button
	 * @default heart
	 */
	color?: ButtonColorProps;
	/**
	 * The rounded of the button
	 */
	rounded?: ButtonRoundedProps;
}>;
``;

export type UseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
> &
	ButtonProps;

export const Button = forwardRef<HTMLButtonElement, UseButtonProps>(
	(
		{
			variant = 'solid',
			size = 'md',
			color = 'heart',
			rounded,
			children = 'Button',
			...otherProps
		},
		ref
	) => {
		return (
			<button
				className={cn(
					'button',
					`button-variant-${variant}`,
					`button-size-${size}`,
					`button-color-${color}`,
					rounded && `button-rounded-${rounded}`
				)}
				{...otherProps}
			>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';
