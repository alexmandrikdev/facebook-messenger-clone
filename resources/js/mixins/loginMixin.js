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
                .post('/login', this.formData)
                .then(response => {
                    this.$store.commit('setIsAuthenticated', true);

                    this.$router.push('/');
                })
                .catch(error => {
                    if (
                        [
                            'These credentials do not match our records.',
                            'The email field is required.',
                        ].indexOf(error.response.data.errors.email[0]) !== -1
                    ) {
                        this.$router.push({
                            name: 'login',
                            params: {
                                password: 'password',
                                incorrectFormValue: 'email',
                            },
                        });
                    }
                });
        },
    },
};
