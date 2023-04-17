<script>
import { state } from "./state.js"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
import LoadingComponent from "./components/LoadingComponent.vue"

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    LoadingComponent,
  },
  data() {
    return {
      state,
    }
  },
  created() {
    this.state.getNumberOfCards(this.state.apiUrl);
  }
}
</script>

<template>

  <AppHeader v-if="!state.loading"></AppHeader>
  <AppMain v-if="!state.loading"></AppMain>
  <LoadingComponent v-else></LoadingComponent>
  <AppFooter></AppFooter>

</template>

<style>
</style>