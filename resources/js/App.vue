<template>
    <router-view />
</template>

<script>
export default {};
</script>

<style>
a.relative:hover::after {
    content: '';
    @apply bg-blue-600 absolute left-0 -bottom-1.5 w-full h-0.75 rounded-0.1875xl;
}
</style>
