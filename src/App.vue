

<template>
  <RouterView/>
</template>

<script setup lang="ts">
import { userPlayerInit } from './stores/player';

userPlayerInit()
</script>

<style scoped lang="scss">

</style>
