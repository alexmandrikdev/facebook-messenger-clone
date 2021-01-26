export default {
    data() {
        return {
            formData: {
                email: '',
                password: '',
                keepMeSignedIn: false,
            },
        };
    },
    methods: {
        login() {
            axios
                .post('/login', {
                    email: this.formData.email,
                    password: this.formData.password,
                    remember: this.formData.keepMeSignedIn,
                })
                .then(response => {
                    this.$store.commit('setIsAuthenticated', true);

                    this.$router.push('/');
                })
                .catch(error => {
                    if (
                        [
                            'The selected email is invalid.',
                            'The email field is required.',
                            'These credentials do not match our records.',
                        ].indexOf(error.response.data.errors.email[0]) !== -1
                    ) {
                        this.$router.push({
                            name: 'login',
                            params: {
                                password: 'password',
                                incorrectFormValue:
                                    error.response.data.errors.email[0] ===
                                    'These credentials do not match our records.'
                                        ? 'password'
                                        : 'email',
                            },
                        });
                    }
                });
        },
    },
};
