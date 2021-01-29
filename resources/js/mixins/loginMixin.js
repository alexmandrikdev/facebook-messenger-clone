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
                    this.$store.dispatch('login', response);
                })
                .catch(error => {
                    if (
                        [
                            'The selected email is invalid.',
                            'The email field is required.',
                            'These credentials do not match our records.',
                        ].indexOf(error.response.data.errors.email[0]) !== -1
                    ) {
                        if (this.$route.name !== 'login') {
                            this.$router.push({
                                name: 'login',
                                params: {
                                    password: 'password',
                                    incorrectFormValueProp:
                                        error.response.data.errors.email[0] ===
                                        'These credentials do not match our records.'
                                            ? 'password'
                                            : 'email',
                                },
                            });
                        } else {
                            this.formData.password = '';

                            this.incorrectFormValue =
                                error.response.data.errors.email[0] ===
                                'These credentials do not match our records.'
                                    ? 'password'
                                    : 'email';
                        }
                    }
                });
        },
    },
};
