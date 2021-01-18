module.exports = {
    purge: [
        './resources/**/*.blade.php',

        './resources/**/*.js',

        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            md: '768px',
            lg: '1024px',
            xl: '1255px',
        },
        extend: {
            spacing: {
                110: '27.5rem',
                132: '33rem',
            },
            lineHeight: {
                13: '3.25rem',
                21.25: '5.3125rem',
            },
            fontSize: {
                5.833: '3.5rem',
            },
            maxWidth: {
                '0.763889xl': '27.5rem',
                '0.91667xl': '33rem',
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
