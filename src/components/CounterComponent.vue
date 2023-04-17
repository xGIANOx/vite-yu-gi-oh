<script>
import { state } from "./../state.js"
export default {
  name: "CounterComponent",
  data() {
    return {
      state,
    }
  },
  methods: {
    retrieveFilteredCardsNumber() {
      let filteredCards = 0;
      if (this.state.filter != "") {
        state.cards.forEach(card => {
          card.type === this.state.filter ? filteredCards++ : "";
        })
        return filteredCards;
      } else {
        return this.state.cards.length;
      }
    }
  }
}
</script>

<template>
  <h5 class="counterComponent p-3 bg-dark text-light">Found {{ retrieveFilteredCardsNumber() }} cards</h5>
</template>

<style lang="scss" scoped>
.counterComponent {
  margin: 16px -12px;
}
</style>