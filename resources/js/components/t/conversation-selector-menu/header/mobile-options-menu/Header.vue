<template>
    <div class="flex items-center p-4 bg-white w-screen">
        <base-right-arrow class="w-5 h-5" @click="$emit('click')" />

        <div class="ml-7 font-semibold">Me</div>
    </div>
</template>

<script>
import BaseRightArrow from '../../../../BaseRightArrow.vue';
export default {
    components: { BaseRightArrow },
};
</script>

<style scoped></style>
