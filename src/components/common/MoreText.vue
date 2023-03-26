<template>
    <div class="leading-5">
    <template v-if="show" >
      <span class="text-sm" v-if="!isShow">{{ text.substring(0, end) }}...</span>
      <span class="text-sm"  v-else>{{ text }}</span>
      <span class="ml-5 text-gray-700 hover-text text-sm" @click="isShow=!isShow">[{{ isShow ? '收起' : '详情' }}]</span>
    </template>
    <template v-else>{{ text }}</template>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from "vue";
  
  const props = defineProps<{ text: string, end: number }>()
  
  const show = ref(false)
  const isShow = ref(false)
  
  if (props.text && props.text.length  > props.end) {
    show.value = true
  }
  
  </script>
  
  <style scoped>
  
  </style>