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
                black: '#000'
            }
        }
    },
    plugins: []
}
