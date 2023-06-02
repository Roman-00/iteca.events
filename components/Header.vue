<script lang="ts" setup>
import Logo from '@/components/Logo';
</script>

<template>
    <header id="header" class="header">
        <div class="container">
            <div class="header-wrap">
                <div class="header-content-right">
                    <Logo />
                </div>

                <div class="header-content-left">
                    Left Data
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 120px;
}
</style>
