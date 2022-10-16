/** @type {import('tailwindcss').Config} */

module.exports = {
    purge: ['./src/**/*.{js,jsx,}', './public/index.html'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                color: {
                    primary: '#fff',
                    secondary: '#ffe72c',
                },
                primary: '#ffe72c',
                secondary: '#fff',
                'main-bg': '#0f0f0f',
            },
            backgroundImage: {
                'unknown-person': "url('../src/assets/images/unknown.png')",
            },
        },
    },
    plugins: [],
};
