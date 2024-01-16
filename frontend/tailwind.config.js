/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                transparent: 'transparent'
            },
            colors: {
                silver: '#ccc',
                white: '#fff',
                black: '#000',
                white_1: '#dfe6e9',
                white_2: '#b2bec3',
                black_1: '#636e72',
                black_2: '#2d3436',
                purple_1: '#a29bfe',
                purple_2: '#6c5ce7',
                pink_1: '#fd79a8',
                pink_2: '#e84393',
                blue_1: '#74b9ff',
                blue_2: '#0984e3',
                mint_1: '#81ecec',
                mint_2: '#00cec9',
                green_1: '#55efc4',
                green_2: '#00b894',
                red_1: '#ff7675',
                red_2: '#d63031',
                orange_1: '#fab1a0',
                orange_2: '#e17055',
                yellow_1: '#ffeaa7',
                yellow_2: '#fdcb6e'
            }
        }
    },
    plugins: []
}
