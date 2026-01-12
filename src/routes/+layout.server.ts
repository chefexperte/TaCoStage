import type {LayoutServerLoad} from './$types';
import {generateColor} from "$lib/util";

export const load: LayoutServerLoad = async ({cookies}) => {
    let color = cookies.get('color');
    if (!color) {
        color = generateColor();
        cookies.set("color", color, {
            path: '/',
            maxAge: 60 * 60 * 24,
            httpOnly: false,
            sameSite: 'lax'
        });
    }
    return {color};
};