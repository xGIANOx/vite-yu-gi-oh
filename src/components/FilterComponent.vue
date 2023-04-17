<script>
import { state } from "./../state.js"
export default {
  name: "FilterComponent",
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <select v-model="state.filter" class="rounded mt-3">
    <option value="">Choose a type</option>
    <option v-for="item in state.types" :value="item">{{ item }}</option>
  </select>
</template>

<style></style>