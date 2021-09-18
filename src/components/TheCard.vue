<template>
  <div class="card">
    <h4>ID:</h4>
    <p class="card__id">{{ data.id }}</p>
    <h3>Шутка:</h3>
    <p>{{ data.joke }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "The Card",
  props: ["data"],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.card {
  padding: 20px 40px 20px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 15px;
  text-align: left;
  box-shadow: 0 0 15px 0 rgb(124, 124, 124);
  position: relative;
}
.card__id {
  margin-bottom: 15px;
}
</style>