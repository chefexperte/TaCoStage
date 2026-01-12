<script lang="ts">
    interface Props {
        id: string;
        label: string;
        type?: 'text' | 'email' | 'textarea' | 'select';
        placeholder?: string;
        value?: string;
        required?: boolean;
        options?: { value: string; label: string }[];
        rows?: number;
        name?: string;
        color: string;
        maxlength?: number;
    }

    let {
        id,
        label,
        type = 'text',
        placeholder = '',
        value = $bindable(''),
        required = false,
        options = [],
        rows = 6,
        name = '',
        color,
        maxlength
    }: Props = $props();

    let focusColors: Record<string, string> = {
        blue: 'focus:border-tacos-blue-1',
        green: 'focus:border-tacos-green-1',
        pink: 'focus:border-tacos-pink-1',
        purple: 'focus:border-tacos-purple-1',
        teal: 'focus:border-tacos-teal-1'
    }

</script>

<div class="flex flex-col gap-1">
    <label class="text-sm font-medium" for={id}>{label}</label>

    {#if type === 'textarea'}
        <textarea
                class="rounded-xl border-gray-300 shadow-sm {focusColors[color]} focus:ring focus:ring-tacos-purple-4/60"
                {id}
                name={name || id}
                {placeholder}
                {rows}
                bind:value
                {required}
                maxlength={maxlength}>
        </textarea>
        {#if maxlength}
            <div class="text-xs text-gray-500 text-right">
                {value.length} / {maxlength}
            </div>
        {/if}
    {:else if type === 'select'}
        <select
                class="rounded-xl border-gray-300 shadow-sm {focusColors[color]} focus:ring focus:ring-tacos-teal-4/60"
                {id}
                name={name || id}
                {required}
                bind:value>
            {#if placeholder}
                <option value="" disabled hidden>{placeholder}</option>
            {/if}
            {#each options as opt}
                <option value={opt.value}>{opt.label}</option>
            {/each}
        </select>
    {:else}
        <input
                class="rounded-xl border-gray-300 shadow-sm {focusColors[color]} focus:ring focus:ring-tacos-blue-4/60"
                {id}
                name={name || id}
                {type}
                {placeholder}
                bind:value
                {required}
                maxlength={maxlength}
        />
        {#if maxlength}
            <div class="text-xs text-gray-500 text-right">
                {value.length} / {maxlength}
            </div>
        {/if}
    {/if}
</div>
