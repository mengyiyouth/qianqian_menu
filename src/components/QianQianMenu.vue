<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card title="Only For 77" flat class="responsive-card">
      <template v-slot:text>
        <v-row>
          <v-col cols="9">
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-btn color="primary" @click="palceAndOrder"
              >Place and order
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <v-data-table
        v-model="selected"
        :items="menuList"
        :headers="headers"
        :search="search"
        :filter-keys="['name']"
        show-select
        item-value="id"
        return-object
        class="adaptive-table"
      >
      </v-data-table>
    </v-card>

    <v-dialog v-model="showDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Order Summary</span>
        </v-card-title>
        <v-card-text>
          <div v-if="selected.length">
            <p>You have selected the following items:</p>
            <ul>
              <li v-for="item in selected" :key="item">{{ item.name }}</li>
            </ul>
          </div>
          <div v-else>
            <p>No items selected.</p>
          </div>
        </v-card-text>
        <v-date-picker></v-date-picker>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showDialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      selected: [],
      search: "",
      headers: [
        { title: "Name", key: "name", align: "center" },
        { title: "Picture", key: "picture", align: "center" },
      ],
      menuList: [
        {
          id: "1",
          name: "酸菜五花肉",
          picture: "https://img.yzcdn.cn/vant/apple-1.jpg",
        },
        {
          id: "2",
          name: "凉拌牛肉",
          picture: "https://img.yzcdn.cn/vant/apple-2.jpg",
        },
        {
          id: "3",
          name: "排骨炖豆角",
          picture: "https://img.yzcdn.cn/vant/apple-3.jpg",
        },
        {
          id: "4",
          name: "番茄炖牛肉",
          picture: "https://img.yzcdn.cn/vant/apple-4.jpg",
        },
        {
          id: "5",
          name: "番茄鸡蛋汤",
          picture: "https://img.yzcdn.cn/vant/apple-5.jpg",
        },
        {
          id: "6",
          name: "辣白菜五花肉",
          picture: "https://img.yzcdn.cn/vant/apple-6.jpg",
        },
        {
          id: "7",
          name: "羊肉抓饭",
          picture: "https://img.yzcdn.cn/vant/apple-7.jpg",
        },
        {
          id: "8",
          name: "牛肉炒辣椒",
          picture: "https://img.yzcdn",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    palceAndOrder() {
      this.showDialog = true;
    },
  },
  computed: {},
};
</script>
<style>
.responsive-card {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.adaptive-table {
  max-height: calc(90vh - 120px);
  overflow-y: auto;
}
/* Adjustments for smaller screens */
@media (max-width: 600px) {
  .responsive-card {
    width: 95%; /* Wider on small screens */
    max-width: none; /* No cap for tiny screens */
  }
  .adaptive-table {
    max-height: calc(90vh - 10px); /* Adjusted for mobile */
  }
}
</style>
