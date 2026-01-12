import logo_blue from '$lib/assets/logo/tacos_blue.svg';
import logo_green from '$lib/assets/logo/tacos_green.svg';
import logo_pink from '$lib/assets/logo/tacos_pink.svg';
import logo_purple from '$lib/assets/logo/tacos_purple.svg';
import logo_teal from '$lib/assets/logo/tacos_teal.svg';

const colors = ['blue', 'green', 'pink', 'purple', 'teal']

export function generateColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export function getLogo(color: string) {
    return {
        'blue': logo_blue,
        'green': logo_green,
        'pink': logo_pink,
        'purple': logo_purple,
        'teal': logo_teal
    }[color]
}