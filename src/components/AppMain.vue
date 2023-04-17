<script>
import { state } from "./../state.js"
import FilterComponent from "./FilterComponent.vue"
import CounterComponent from "./CounterComponent.vue"
import CardsComponent from "./CardsComponent.vue"
export default {
  name: "AppMain",
  components: {
    FilterComponent,
    CounterComponent,
    CardsComponent,
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
    <CounterComponent v-if="state.cards != []" :cards="state.cards"></CounterComponent>
    <CardsComponent></CardsComponent>
  </div>
</main>
</template>

<style lang="scss">
@use "./../assets/scss/app.scss" as *;
main {
  background-color: $primary;
  min-height: 4650px;
}
</style>