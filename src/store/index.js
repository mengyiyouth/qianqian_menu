import { createStore } from "vuex";

export default createStore({
  state: {
    newOrderData: [],
  },
  mutations: {
    setNewOrderData(state, newOrderData) {
      state.newOrderData = newOrderData;
    },
  },
  actions: {},
  getters: {
    getNewOrderData: (state) => state.newOrderData,
  },
});
