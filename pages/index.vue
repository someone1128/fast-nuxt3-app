<template>
  <div>
    <div>
      <h1>Home page</h1>
      <NuxtLink to="/about">About page</NuxtLink>
    </div>
    <NButton size="medium" type="primary">
      Primary
    </NButton>
    <n-button secondary strong type="primary">
      Primary
    </n-button>
    <h1>1231 <span>112</span></h1>
    <NuxtLink to="/hello">hello</NuxtLink>
  </div>
</template>

<script setup>

import {NButton} from "naive-ui"</script>
