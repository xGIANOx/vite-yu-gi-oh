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
  <div class="select_btn py-3">
    <select class="rounded">
    <option v-for="item in state.types" value="item">{{ item }}</option>
  </select>
  </div>
</template>

<style></style>