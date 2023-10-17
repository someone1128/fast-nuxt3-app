<template>
  <div>{{ counter.name }}</div>
  <div>{{ counter.times }}</div>

  <button @click="change">改变pinia中的数据</button>

</template>

<script lang="ts" setup>
import {userCouter} from '~/store/counter'

const counter = userCouter()

const change = () => {
  counter.increment()
  console.log(counter.times)
  console.log(counter.name)
}
</script>

<style scoped>

</style>
