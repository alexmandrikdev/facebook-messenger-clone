<template>
    <div>
        <auth-layout>
            <form>
                <input
                    v-model="formData.email"
                    type="text"
                    placeholder="Email"
                />
                <input
                    v-model="formData.password"
                    type="password"
                    placeholder="Password"
                />
                <input
                    v-model="formData.passwordConfirmation"
                    type="password"
                    placeholder="Password Confirmation"
                />
                <input
                    v-model="formData.firstName"
                    type="text"
                    placeholder="First Name"
                />
                <input
                    v-model="formData.lastName"
                    type="text"
                    placeholder="Last Name"
                />
                <button type="submit">Register</button>
            </form>
        </auth-layout>
    </div>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';

export default {
    components: {
        AuthLayout,
    },
    data() {
        return {
            formData: {
                email: '',
                password: '',
                passwordConfirmation: '',
                firstName: '',
                lastName: '',
            },
        };
    },
};
</script>

<style scoped></style>
