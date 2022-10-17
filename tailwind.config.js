/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
        opacityValue ? `rgba(var(--${variable}), ${opacityValue})` : `rgb(var(--${variable}))`;
};

const textColor = {
    primary: '#fff',
    secondary: '#ffe72c',
    tertiary: '#000',
};

const backgroundColor = {
    primary: generateColorClass('bg-primary'),
    secondary: '#0f0f0f',
};

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            textColor,
            backgroundColor,
            colors: {
                hightlight: '#ffe72c',
            },
            backgroundImage: {
                'unknown-person': "url('../../src/assets/images/unknown.png')",
            },
        },
    },
    plugins: [],
};
