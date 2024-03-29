/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: true,
    theme: {
        extend: {
            fontFamily: {
                spacemono: ['"Space Mono"', 'monospace'],
                spacegrotesk: ['"Space Grotesk"', 'sans-serif']
            },
            colors: {
                'cosmic-cobalt': '#241E92',
                iris: '#5432D3',
                'medium-slate-blue': '#7B6CF6',
                'pale-violet': '#C6A3FF',
                gallery: '#eeeeee',
                alabaster: '#f7f7f7',
                error: {
                    crimson: '#e01039'
                },
                success: {
                    malachite: '#10e078'
                },
                greyscale: {
                    100: '#1A1A1A',
                    200: '#3B3B3B',
                    300: '#A1A1A1',
                    400: '#EEEEEE',
                    500: '#F8F7F6'
                }
            }
        },
        boxShadow: {
            'cosmic-cobalt': '16px 18px 0px 0px #241E92',
            'medium-slate-blue': '16px 18px 0px 0px #7B6CF6',
            black: '16px 18px 0px 0px #000000'
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: []
};
