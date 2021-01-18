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
            xl: '1255px',
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
