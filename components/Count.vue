<template>
  <div class="count-comp">
    <h1>count:{{ count }}</h1>
    <hr />
    <van-button style="padding: 0 20px" size="small" type="primary" @click="handleAdd">Add</van-button>&nbsp;
    <van-button style="padding: 0 20px" size="small" type="success" @click="handleSub">Sub</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

console.log(111)
const count = ref(0)
const handleAdd = () => {
  count.value += 1
}
const handleSub = () => {
  count.value -= 1
}
</script>

<style lang="css" scoped>
.count-comp {
  padding: 20px;
  background-color: #888;
}
</style>
