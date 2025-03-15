<template>
  <v-card title="Only For 77" flat class="responsive-card">
    <template v-slot:text>
      <v-row>
        <v-select
          label="菜单日期"
          :items="allDateList"
          v-model="selectedDate"
        ></v-select>
        <!-- <v-col cols="3"> -->
          <v-btn color="primary" @click="addNewDish">Add</v-btn>
        <!-- </v-col> -->
        <!-- <v-col cols="3"> -->
          <v-btn color="primary" @click="searchDailyOrder">Search</v-btn>
        <!-- </v-col> -->

      </v-row>
    </template>
    <v-data-table
      :items="this.displayOrderData"
      :headers="headers"
      :filter-keys="['name']"
      item-value="id"
      class="adaptive-table"
    >
      <template v-slot:[`item.picture`]="{ item }">
        <v-img :src="item.picture" width="100" height="100"></v-img>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dateMenu: false,
      selectedDate: "",
      currentDate: "",
      allDateList: [],
      displayOrderData: [],
      headers: [
        { title: "菜品", key: "name", align: "center" },
        { title: "图片", key: "picture", align: "center" },
        { title: "卡路里", key: "calories", align: "center" },
        { title: "脂肪 (克)", key: "fat", align: "center" },
        { title: "碳 (克)", key: "carbs", align: "center" },
        { title: "蛋白质 (克)", key: "protein", align: "center" },
        { title: "铁 (克)", key: "iron", align: "center" },
      ],
      dailyOrderData: {},
    };
  },
  methods: {
    addNewDailyOrder() {
      const date = this.$store.getters.getOrderDate;
      const orderData = this.$store.getters.getNewOrderData;
      this.selectedDate = date;
      this.$store.commit("setDailyOrderData", { date, orderData });
      this.displayOrderData = orderData;
      this.allDateList = Object.keys(this.$store.getters.getDailyOrderData);
    },
    searchDailyOrder() {
      this.displayOrderData =
        this.$store.getters.getDailyOrderData[this.selectedDate];
    },
  },
  mounted() {
    this.addNewDailyOrder();
  },
  computed: {},
};
</script>
