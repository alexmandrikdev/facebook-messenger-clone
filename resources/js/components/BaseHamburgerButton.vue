<template>
    <button
        class="cursor-pointer relative"
        :class="{ close: isOpen }"
        @click="$emit('click')"
    >
        <div class="line"></div>
        <div class="line"></div>
    </button>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.line {
    height: 3px;
    @apply bg-black my-2 w-10;
}

.close {
    width: 25px;
    height: 25px;
}

.close > .line {
    position: absolute;
    top: 3px;
    right: -5px;
    width: 31px;
    height: 2px;
}

.close > .line:first-of-type {
    transform: rotate(-45deg);
}

.close > .line:last-of-type {
    transform: rotate(45deg);
}
</style>
