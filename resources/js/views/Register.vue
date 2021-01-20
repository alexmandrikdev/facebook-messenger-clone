<template>
    <div>
        <auth-layout>
            <form>
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
                    v-if="
                        $v.formData.email.$dirty && !$v.formData.email.required
                    "
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

                <button type="submit">Register</button>
            </form>
        </auth-layout>
    </div>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators';

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
            passwordMinLength: 6,
        };
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
