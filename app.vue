<template>
  <div>
    <!--<NuxtWelcome />-->
    <NButton size="medium" type="primary">
      Primary
    </NButton>
    <n-button secondary strong type="primary">
      Primary
    </n-button>
    <h1>1231 <span>112</span></h1>
  </div>
</template>

<script setup>

import {NButton} from "naive-ui"
import {getListData} from "./server/api/apiHttps.ts";

const handleGetData = async () => {
  const result = await getListData("");
  console.log("123", result);
};

handleGetData()
</script>
