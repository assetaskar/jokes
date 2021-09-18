import { createStore } from "vuex";

export default createStore({
  state: {
    jokes: [],
    favorites: [],
  },
  getters: {
    getFavoritesSearch: (state) => (str) => {
      if (!state.favorites.length) return [];
      const regex = new RegExp(str, "i");
      return state.favorites.filter((item) => item.joke.match(regex));
    },
  },
  mutations: {
    ADD_JOKE(state, payload) {
      state.jokes.push(payload);
    },
    TO_FAVORITE(state, payload) {
      const isHave = state.favorites.includes(payload);
      if (isHave) return;
      state.favorites.push(payload);
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        commit("ADD_JOKE", data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    },
  },
});
