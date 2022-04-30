<template>
    <h1>Home {{ x }},{{ y }}</h1>
</template>

<script setup>
// vue-use
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>

<style scoped lang="less"></style>
