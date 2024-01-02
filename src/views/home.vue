<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'app-home' });

const input = ref();
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="space-x-2">
      <el-input v-model="input" class="w-48" placeholder="Please input" />
      <el-button type="primary">Primary</el-button>
    </div>
  </div>
</template>
