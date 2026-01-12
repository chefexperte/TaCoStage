<script lang="ts">
    import * as m from '$lib/paraglide/messages.js'
    import Button from "$lib/components/Button.svelte";
    import {colorState} from "$lib/color.svelte";

    let color = $derived(colorState.color)
</script>

<section class="max-w-3xl mx-auto">
    <div class="rounded-3xl bg-white/70 backdrop-blur p-6 md:p-10 shadow-lg border border-white/60">
        <h1 class="text-3xl font-bold mb-3">{m.about_title?.() ?? 'About TaCoStage'}</h1>
        <p class="text-lg leading-relaxed">{m.about_body?.() ?? ''}</p>
        <br>
        <Button color={color} href="https://linguistik.computer/2026">{m.about_tacos_link()}</Button>
    </div>
</section>
