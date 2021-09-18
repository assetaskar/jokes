<template>
  <div class="home">
    <the-card v-for="joke in jokes" :key="joke.id" :data="joke">
      <button class="favorite" @click="toFavorite(joke)"></button>
    </the-card>
    <button class="btn" @click="more">Загрузить еще</button>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

import TheCard from "@/components/TheCard.vue";

export default {
  name: "Home",
  components: { TheCard },
  setup() {
    const store = useStore();

    onMounted(() => {
      if (!store.state.jokes.length) {
        store.dispatch("fetchData");
      }
    });

    return {
      jokes: computed(() => store.state.jokes),
      more: () => store.dispatch("fetchData"),
      toFavorite: (data) => store.commit("TO_FAVORITE", data),
    };
  },
};
</script>

<style scoped>
.home {
  padding: 0 20px;
}
.btn {
  background-color: #42b983;
  padding: 0.5em 1em;
  font-size: 18px;
  border-radius: 0.5em;
  margin-top: 25px;
}
.favorite {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 35px;
  height: 35px;
  border: none;
  background-image: url("../assets/favorite.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: transparent;
  transition: 0.1s;
}
.favorite:hover {
  transform: scale(1.1);
}
.favorite:active {
  transform: scale(0.8);
}
</style>