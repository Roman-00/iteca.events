<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue';
import debounce from 'lodash.debounce';

const WAIT = 100;

const layouts = 'default';

/**
 * Записываем значение скрола в кастомную переменную.
 */
const spyScroll = debounce(() => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}, WAIT);

onMounted(() => {
    window.addEventListener('scroll', spyScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', spyScroll);
});
</script>

<template>
    <NuxtLayout :name="layouts">
        <NuxtPage />
    </NuxtLayout>
</template>
