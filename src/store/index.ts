import { createStore } from "vuex";

export default createStore({
  state: {
    players: [],
  },
  mutations: {
    setPlayers(state, players) {
      state.players = players;
    },
  },
  actions: {
    updatePlayers({ commit }, players) {
      commit("setPlayers", players);
    },
  },
});
