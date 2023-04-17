<script>
export default {
  name: "CardItem",
  props: {
    card: Object,
  }
}
</script>

<template>
  <div class="cardItem col text-center">
    <div class="card">
      <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name + ' image'">
      <h4 class="my-2 text-white text-uppercase fs-6">{{ card.name }}</h4>
      <span class="pb-2">{{ card.type }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@use "./../assets/scss/app.scss" as *;
.card {
  background-color: $primary !important;
  height: 100% !important;
}
</style>