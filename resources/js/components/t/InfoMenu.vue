<template>
    <div>
        <div class="h-13 w-full flex items-center p-4 md:hidden">
            <base-left-arrow class="w-5 h-5" @click="$emit('close')" />
        </div>
        <vue-custom-scrollbar class="overflow-y-auto flex-col flex w-full">
            <img
                src="/images/profile-picture-placeholder.png"
                :alt="[
                    user
                        ? `${user.first_name} ${user.last_name}`
                        : `Facebook User`,
                ]"
                class="w-20 h-20 mx-auto mt-4 mb-2.75 rounded-full object-cover object-center"
            />

            <div class="text-4.25 font-semibold text-center leading-5 p-4 pt-0">
                <template v-if="user">
                    {{ user.first_name }} {{ user.last_name }}
                </template>
                <template v-else>
                    Facebook User
                </template>
            </div>
        </vue-custom-scrollbar>
    </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import '../../../css/vue-custom-scrollbar.css';
import BaseLeftArrow from '../BaseLeftArrow.vue';

export default {
    components: { vueCustomScrollbar, BaseLeftArrow },
    props: {
        user: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped></style>
