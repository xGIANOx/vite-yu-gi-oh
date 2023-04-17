<script>
export default {
  name: "CounterComponent",
  props: {
    cards: Object,
  }
}
</script>

<template>
  <h5 class="m-0 py-3">Found {{ cards.length }} cards</h5>
</template>

<style></style>
