import type { ComponentType } from 'svelte';

export interface LayoutConfigT<C extends Record<string, ComponentType>> {
	width?: string;
	component?: keyof C & string;
	props?: Record<string, any>;
	isLoading?: boolean;
	layoutClass?: string;
	cols?: LayoutConfigT<C>[];
	rows?: LayoutConfigT<C>[];
	centerX?: 'left' | 'right' | 'middle';
	centerY?: 'top' | 'bottom' | 'middle';
	alignHeight?: boolean;
	wrap?: 'wrap' | 'nowrap';
}
