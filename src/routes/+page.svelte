<script lang="ts">
    import * as m from '$lib/paraglide/messages.js'
    import { localizeHref } from '$lib/paraglide/runtime'
    import {colorState} from "$lib/color.svelte";

    let color = $derived(colorState.color)

    const accentVariants: Record<string, string> = {
        blue: 'from-tacos-blue-4 to-tacos-blue-5',
        green: 'from-tacos-green-4 to-tacos-green-5',
        pink: 'from-tacos-pink-4 to-tacos-pink-5',
        purple: 'from-tacos-purple-4 to-tacos-purple-5',
        teal: 'from-tacos-teal-4 to-tacos-teal-5'
    }
</script>

<section class="max-w-4xl mx-auto">
    <div class="rounded-3xl bg-white/70 backdrop-blur p-8 md:p-12 shadow-lg border border-white/60">
        <h1 class="text-4xl font-bold tracking-tight mb-4">{m.homepage_title?.() ?? 'TaCoStage'}</h1>
        <p class="text-lg leading-relaxed mb-6">{m.homepage_intro?.() ?? 'Welcome to TaCoStage.'}</p>

        <div class="mt-8 grid sm:grid-cols-2 gap-4">
            <a href={localizeHref('/contribute')} class="block rounded-xl p-5 bg-linear-to-br {accentVariants[color]} hover:brightness-105 transition">
                <div class="text-sm opacity-70">{m.cta_primary_overline?.() ?? 'Call for Contributions'}</div>
                <div class="text-xl font-semibold">{m.cta_primary_title?.() ?? 'Submit your contribution'}</div>
            </a>
            <a href={localizeHref('/contributions')} class="block rounded-xl p-5 bg-white/80 hover:bg-white transition border">
                <div class="text-sm opacity-70">View Schedule</div>
                <div class="text-xl font-semibold">Confirmed Contributions</div>
            </a>
        </div>

        <div class="mt-4">
            <a href={localizeHref('/about')} class="block rounded-xl p-5 bg-white/80 hover:bg-white transition border">
                <div class="text-sm opacity-70">{m.cta_secondary_overline?.() ?? 'Learn more'}</div>
                <div class="text-xl font-semibold">{m.cta_secondary_title?.() ?? 'About the event'}</div>
            </a>
        </div>
    </div>
</section>