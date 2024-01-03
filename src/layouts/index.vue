<script lang="ts" setup>
defineOptions({ name: 'app-layout' });
</script>

<template>
  <el-container class="h-screen overflow-hidden text-sm">
    <el-header height="50px" class="border-b border-gray-300 p-0">Header</el-header>
    <el-container>
      <el-aside width="200px" class="border-r border-gray-300">Aside</el-aside>
      <el-container>
        <el-main class="p-0 overflow-y-auto" style="height: calc(100vh - 280px)">
          <div style="height: 2000px">Main</div>
        </el-main>
        <el-footer height="30px" class="border-t border-gray-300 p-0">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
