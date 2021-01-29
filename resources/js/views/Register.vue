<template>
    <auth-layout>
        <form class="flex flex-col justify-center" @submit.prevent="register">
            <input
                v-model.trim.lazy="$v.formData.email.$model"
                :class="{ invalid: $v.formData.email.$error }"
                type="text"
                placeholder="Email"
                name="email"
                required
                @blur="$v.formData.email.$touch()"
            />
            <div
                v-if="$v.formData.email.$dirty && !$v.formData.email.required"
                class="invalid-feedback"
            >
                The email is required
            </div>
            <div
                v-if="$v.formData.email.$dirty && !$v.formData.email.email"
                class="invalid-feedback"
            >
                The email must be a valid email
            </div>

            <input
                v-model.trim="formData.password"
                :class="{ invalid: $v.formData.password.$error }"
                type="password"
                placeholder="Password"
                name="password"
                required
                @blur="$v.formData.password.$touch()"
            />
            <div
                v-if="
                    $v.formData.password.$dirty &&
                        !$v.formData.password.required
                "
                class="invalid-feedback"
            >
                The password is required
            </div>
            <div
                v-if="
                    $v.formData.password.$dirty &&
                        !$v.formData.password.minLength
                "
                class="invalid-feedback"
            >
                The password length must be at least
                {{ passwordMinLength }} character
            </div>

            <input
                v-model.trim="formData.passwordConfirmation"
                :class="{
                    invalid: $v.formData.passwordConfirmation.$error,
                }"
                type="password"
                placeholder="Password confirmation"
                name="passwordConfirmation"
                required
                @blur="$v.formData.passwordConfirmation.$touch()"
            />
            <div
                v-if="
                    $v.formData.passwordConfirmation.$dirty &&
                        !$v.formData.passwordConfirmation.required
                "
                class="invalid-feedback"
            >
                The password confirmation is required
            </div>
            <div
                v-if="
                    $v.formData.passwordConfirmation.$dirty &&
                        $v.formData.passwordConfirmation.required &&
                        !$v.formData.passwordConfirmation.sameAsPassword
                "
                class="invalid-feedback"
            >
                The password confirmation must be the same as the password
            </div>

            <input
                v-model.trim="formData.firstName"
                :class="{ invalid: $v.formData.firstName.$error }"
                type="text"
                placeholder="First name"
                name="firstName"
                required
                @blur="$v.formData.firstName.$touch()"
            />
            <div
                v-if="
                    $v.formData.firstName.$dirty &&
                        !$v.formData.firstName.required
                "
                class="invalid-feedback"
            >
                The first name is required
            </div>

            <input
                v-model.trim="formData.lastName"
                :class="{ invalid: $v.formData.lastName.$error }"
                type="text"
                placeholder="Last name"
                name="lastName"
                required
                @blur="$v.formData.lastName.$touch()"
            />
            <div
                v-if="
                    $v.formData.lastName.$dirty &&
                        !$v.formData.lastName.required
                "
                class="invalid-feedback"
            >
                The last name is required
            </div>

            <div class="text-center mt-3">
                <input
                    type="submit"
                    value="Register"
                    class="bg-primary rounded-6.25xl text-white py-2.375 px-5 cursor-pointer outline-none"
                />
            </div>
        </form>
    </auth-layout>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators';
import AuthLayout from '../layouts/AuthLayout.vue';
import gql from 'graphql-tag';

export default {
    components: { AuthLayout },
    data() {
        return {
            formData: {
                email: '',
                password: '',
                passwordConfirmation: '',
                firstName: '',
                lastName: '',
            },
            passwordMinLength: 6,
        };
    },
    methods: {
        register() {
            axios
                .post('/register', {
                    email: this.formData.email,
                    password: this.formData.password,
                    password_confirmation: this.formData.passwordConfirmation,
                    first_name: this.formData.firstName,
                    last_name: this.formData.lastName,
                })
                .then(response => {
                    this.$apollo
                        .query({
                            query: gql`
                                query {
                                    authUser {
                                        id
                                        first_name
                                        last_name
                                    }
                                }
                            `,
                        })
                        .then(response => {
                            this.$store.dispatch(
                                'login',
                                response.data.authUser,
                            );
                        });
                });
        },
    },
    validations() {
        return {
            formData: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    minLength: minLength(this.passwordMinLength),
                },
                passwordConfirmation: {
                    required,
                    sameAsPassword: sameAs('password'),
                },
                firstName: {
                    required,
                },
                lastName: {
                    required,
                },
            },
        };
    },
};
</script>

<style scoped></style>
