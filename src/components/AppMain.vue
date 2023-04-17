<script>
import { state } from "./../state.js"
import FilterComponent from "./FilterComponent.vue"
export default {
  name: "AppMain",
  components: {
    FilterComponent,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
<main>
  <div class="container">
    
    <FilterComponent v-if="state.cards != []" :cards="state.cards"></FilterComponent>
  </div>
</main>
</template>

<style lang="scss">
@use "./../assets/scss/app.scss" as *;
main {
  background-color: $primary;
}
</style>