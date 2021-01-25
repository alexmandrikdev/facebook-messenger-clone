<template>
    <div>
        <page-not-available v-if="!pageIsAvailable" />
        <div v-else>Page available</div>
    </div>
</template>

<script>
import PageNotAvailable from '../components/PageNotAvailable.vue';

export default {
    components: {
        PageNotAvailable,
    },
    props: {
        incorrectFormValue: {
            type: String,
            default: null,
        },
        password: {
            type: String,
            default: null,
        },
    },
    computed: {
        pageIsAvailable() {
            if (this.password === 'password') {
                return (
                    ['email', 'password'].indexOf(this.incorrectFormValue) !==
                    -1
                );
            }
            return this.password === null;
        },
    },
    created() {
        if (!this.pageIsAvailable) {
            document.title = 'Messenger | Page Not Found';
        }
    },
};
</script>

<style scoped></style>
