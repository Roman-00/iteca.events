<script lang="ts" setup>
import Header from '@/components/Header';
</script>

<template>
    <Header />

    <main class="content">
        <slot />
    </main>

    <footer id="footer" class="footer">
        Footer
    </footer>
</template>

<style lang="scss">
.content {
    padding-top: 120px;
}
</style>
