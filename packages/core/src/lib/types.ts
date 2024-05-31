import type { ComponentType } from 'svelte';

export interface LayoutConfig<C extends Record<string, ComponentType>> {
	width?: string;
	component?: keyof C & string;
	props?: Record<string, any>;
	isLoading?: boolean;
	className?: string;
	wrapperClass?: string;
	cols?: LayoutConfig<C>[];
	rows?: LayoutConfig<C>[];
}
