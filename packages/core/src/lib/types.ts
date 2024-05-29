import type { ComponentType } from 'svelte';

export interface LayoutConfig<C extends Record<string, ComponentType>, T> {
	width?: string;
	component?: keyof C & string;
	data?: T;
	isLoading?: boolean;
	style?: string;
	cols?: LayoutConfig<C, T>[];
	rows?: LayoutConfig<C, T>[];
}
