<template>
    <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        aria-busy="true"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuetext="Loading..."
        role="progressbar"
        tabindex="0"
    >
        <circle
            cx="12"
            cy="12"
            fill="none"
            r="11"
            stroke="#BEC3C9"
            stroke-dasharray="69.11503837897544"
            stroke-width="2"
        ></circle>
    </svg>
</template>

<script>
export default {};
</script>

<style scoped>
svg,
circle {
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
}

svg {
    animation-name: ffxpx7bd-B;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
    outline: none;
}

circle {
    animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);
    animation-name: e1xrcguq-B;
}

@keyframes ffxpx7bd-B {
    0% {
        transform: rotate(-90deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(270deg);
    }
    75% {
        transform: rotate(450deg);
    }
    100% {
        transform: rotate(990deg);
    }
}

@keyframes e1xrcguq-B {
    0% {
        stroke-dashoffset: 13.8;
        transform: rotate(-90deg);
    }
    25% {
        stroke-dashoffset: 62.2;
        transform: rotate(162deg);
    }
    50% {
        stroke-dashoffset: 31.1;
        transform: rotate(72deg);
    }
    75% {
        stroke-dashoffset: 62.2;
        transform: rotate(162deg);
    }
    100% {
        stroke-dashoffset: 13.8;
        transform: rotate(-90deg);
    }
}
</style>
