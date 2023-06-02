<script lang="ts" setup>
import { useLocalePath } from '#i18n';
import { NuxtImg } from '#components';

const localePath = useLocalePath();
</script>

<template>
    <nuxt-link
        :to="localePath({ name: 'index' })"
        class="logo-link"
    >
        <nuxt-img
            src="/logo.png"
            width="140"
            quality="80"
            class="logo-link__img"
        />
    </nuxt-link>
</template>

<style lang="scss">
.logo-link {
    display: block;
    padding-top: 24px;
}
</style>
