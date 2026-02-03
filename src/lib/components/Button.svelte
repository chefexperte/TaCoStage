<script lang="ts">
    import {type Snippet} from 'svelte';

    interface Props {
        type?: 'button' | 'submit' | 'reset';
        variant?: 'primary' | 'secondary' | 'ghost';
        active?: boolean;
        disabled?: boolean;
        onclick?: () => void;
        href?: string;
        ariaLabel?: string;
        ariaPressed?: boolean;
        color: string;
        children?: Snippet;
    }

    let {
        type = 'button',
        variant = 'primary',
        active = false,
        disabled = false,
        onclick,
        href,
        ariaLabel,
        ariaPressed,
        color,
        children
    }: Props = $props();

    const outlineVariants: Record<string, string> = {
        blue: 'ring-1 ring-tacos-blue-3/30',
        green: 'ring-1 ring-tacos-green-3/30',
        pink: 'ring-1 ring-tacos-pink-3/30',
        purple: 'ring-1 ring-tacos-purple-3/30',
        teal: 'ring-1 ring-tacos-teal-3/30'
    };

    const activeBgVariants: Record<string, string> = {
        blue: 'bg-tacos-blue-4/40',
        green: 'bg-tacos-green-4/40',
        pink: 'bg-tacos-pink-4/40',
        purple: 'bg-tacos-purple-4/40',
        teal: 'bg-tacos-teal-4/40'
    };

    const primaryVariants: Record<string, string> = {
        blue: 'bg-tacos-blue-3 text-white hover:bg-tacos-blue-2',
        green: 'bg-tacos-green-3 text-white hover:bg-tacos-green-2',
        pink: 'bg-tacos-pink-3 text-white hover:bg-tacos-pink-2',
        purple: 'bg-tacos-purple-3 text-white hover:bg-tacos-purple-2',
        teal: 'bg-tacos-teal-3 text-white hover:bg-tacos-teal-2'
    };

    const secondaryVariants: Record<string, string> = {
        blue: 'text-tacos-blue-2 hover:bg-tacos-blue-5/10',
        green: 'text-tacos-green-2 hover:bg-tacos-green-5/10',
        pink: 'text-tacos-pink-2 hover:bg-tacos-pink-5/10',
        purple: 'text-tacos-purple-2 hover:bg-tacos-purple-5/10',
        teal: 'text-tacos-teal-2 hover:bg-tacos-teal-5/10'
    }

    const baseClasses = 'rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer outline-0 outline-transparent hover:outline-2 hover:outline-tacos-green-3';

    let outline = $derived(outlineVariants[color]);
    let activeCls = $derived.by(() => {
        return active ? `${activeBgVariants[color]} ${outline} font-medium shadow-sm` : `${outline} hover:shadow-sm`;
    });

    let variantCls = $derived.by(() => {
        switch (variant) {
            case 'primary': return `${primaryVariants[color]}`;
            case 'secondary': return `${secondaryVariants[color]}`;
        }
    })

    const classes = $derived(`${baseClasses} ${activeCls} ${variantCls} text-left`);
</script>

{#if href}
    <a
            {href}
            class={classes}
            aria-label={ariaLabel}
            aria-current={active ? 'page' : undefined}
            {onclick}>
        {@render children?.()}
    </a>
{:else}
    <button
            {type}
            class={classes}
            {disabled}
            {onclick}
            tabindex="0"
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}>
        {@render children?.()}
    </button>
{/if}
