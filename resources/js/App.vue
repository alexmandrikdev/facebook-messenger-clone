<template>
    <router-view />
</template>

<script>
export default {};
</script>

<style>
a.relative:hover::after {
    content: '';
    @apply bg-blue-600;
    height: 3px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -6px;
    border-radius: 1.5px;
}
</style>
