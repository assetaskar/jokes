<template>
  <div class="favorite">
    <input
      type="text"
      class="search"
      placeholder="Поиск"
      v-model.trim="search"
    />
    <the-card
      v-for="favorite in favorites"
      :key="favorite.id"
      :data="favorite"
    />
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
export default {
  name: "Favorites",
  components: { TheCard },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavoritesSearch(this.search);
    },
  },
};
</script>

<style scoped>
.favorite {
  padding: 0 20px;
}
.search {
  width: 60%;
  font-size: 14px;
  padding: 10px 20px;
  margin-bottom: 30px;
}
</style>