<template>
    <div class="flex items-center p-4 bg-white w-screen">
        <base-left-arrow class="w-5 h-5" @click="$emit('click')" />

        <div class="ml-7 font-semibold">Me</div>
    </div>
</template>

<script>
import BaseLeftArrow from '../../../../BaseLeftArrow.vue';
export default {
    components: { BaseLeftArrow },
};
</script>

<style scoped></style>
