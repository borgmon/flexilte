import type { ComponentType } from 'svelte';

export interface LayoutConfig<C extends Record<string, ComponentType>> {
	id?: string;
	width?: string;
	component?: keyof C & string;
	props?: Record<string, any>;
	isLoading?: boolean;
	layoutClass?: string; // apply to all cols or rows
	wrapperClass?: string; // create and wrap element with a wrapper
	nodeClass?: string; // apply to individual element
	cols?: LayoutConfig<C>[];
	rows?: LayoutConfig<C>[];
	posX?: 'left' | 'right' | 'middle';
	posY?: 'top' | 'bottom' | 'middle';
	alignHeight?: boolean | number;
	wrap?: 'wrap' | 'nowrap';
}
