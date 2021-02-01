<template>
    <div
        class="top-full left-0 pb-2 h-full box-content absolute mt-3.75 z-50 hidden md:block"
    >
        <div class="w-85 bg-white shadow rounded-lg z-20 relative py-2">
            <options />

            <div
                class="w-4.5 h-4.5 bg-white transform rotate-45 absolute -top-1 left-2.25 -z-10"
            ></div>
        </div>
    </div>
</template>

<script>
import Options from './header/Options.vue';
export default {
    components: { Options },
};
</script>

<style scoped>
.shadow {
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
        inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}
</style>
