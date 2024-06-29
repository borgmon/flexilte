import type { LayoutConfig } from '@flexilte/core';
import { TextBox } from '@flexilte/skeleton';
import { CodeBlock, Avatar, ProgressRadial, ProgressBar, InputChip } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';

export const components = { CodeBlock, Avatar, ProgressRadial, ProgressBar, TextBox, InputChip };

export const frontPageStore = writable<LayoutConfig<typeof components>>();
export const docStore = writable<LayoutConfig<typeof components>>();
export const editorStore = writable<LayoutConfig<typeof components>>();
export const exampleStore = writable<LayoutConfig<typeof components>>();
