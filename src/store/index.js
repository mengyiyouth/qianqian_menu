import { createStore } from "vuex";

export default createStore({
  state: {
    newOrderData: [],
    orderDate: "",
    dailyOrderData: {}
  },
  mutations: {
    setDailyOrderData(state, {date, orderData}){
      if(state.dailyOrderData[date]){
        state.dailyOrderData[date] = [...state.dailyOrderData[date]];
      }else{
        state.dailyOrderData[date] = orderData;
      }
    },
    setOrderDate(state, date){
      state.orderDate = date;
    },
    setNewOrderData(state, newOrderData) {
      state.newOrderData = newOrderData;
    },
  },
  actions: {},
  getters: {
    getDailyOrderData: (state) => state.dailyOrderData,
    getNewOrderData: (state) => state.newOrderData,
    getOrderDate: (state) => state.orderDate,
  },
});
