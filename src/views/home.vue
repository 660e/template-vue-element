<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'app-home' });

const input = ref();
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <img src="@/assets/logo.svg" class="w-24" />
    <div class="space-x-2 mt-8">
      <el-input v-model="input" class="w-48" placeholder="Please input" />
      <el-button type="primary">Primary</el-button>
    </div>
  </div>
</template>
