module.exports = {
    purge: [
        './resources/**/*.blade.php',

        './resources/**/*.js',

        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1255px',
        },
        extend: {
            spacing: {
                '55%': '55%',
                0.75: '0.1875rem',
                1.2: '0.3rem',
                1.75: '0.4375rem',
                2.25: '0.5625rem',
                2.375: '0.59375rem',
                3.625: '0.90625rem',
                3.75: '0.937rem',
                4.5: '1.125rem',
                7.5: '1.875rem',
                10.5: '2.625rem',
                13: '3.25rem',
                14.25: '3.5625rem',
                16.75: '4.1875rem',
                18.25: '4.5625rem',
                22: '5.5rem',
                30: '7.5rem',
                37.5: '9.375rem',
                85: '21.25rem',
                90: '22.5rem',
                110: '27.5rem',
                132: '33rem',
            },
            lineHeight: {
                13: '3.25rem',
                21.25: '5.3125rem',
            },
            fontSize: {
                3.75: '0.9375rem',
                14: '3.5rem',
            },
            maxWidth: {
                '0.763889xl': '27.5rem',
                '0.91667xl': '33rem',
                '1.041667xl': '9.375rem',
                '94.75': '23.6875rem',
            },
            minWidth: {
                '62.25': '15.5625rem',
            },
            opacity: {
                98: '0.98',
            },
            borderRadius: {
                '0.1875xl': '0.09375rem',
                '1.25xl': '0.625rem',
                '6.25xl': '3.125rem',
            },
            zIndex: {
                '-10': -10,
            },
            rotate: {
                40: '40deg',
            },
            colors: {
                primary: '#0A7CFF',
            },
            transitionProperty: {
                width: 'width',
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen xl': {
                        maxWidth: '1195px',
                    },
                },
            });
        },
    ],
};
