<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card title="Only For 77" flat class="responsive-card">
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </template>
      <v-data-table
        :items="menuList"
        :headers="headers"
        :search="search"
        class="adaptive-table"
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { title: "Name", key: "name", align: "center" },
        { title: "Picture", key: "picture", align: "center" },
      ],
      menuList: [
        {
          name: "酸菜五花肉",
          picture: "https://img.yzcdn.cn/vant/apple-1.jpg",
        },
        {
          name: "凉拌牛肉",
          picture: "https://img.yzcdn.cn/vant/apple-2.jpg",
        },
        {
          name: "排骨炖豆角",
          picture: "https://img.yzcdn.cn/vant/apple-3.jpg",
        },
        {
          name: "番茄炖牛肉",
          picture: "https://img.yzcdn.cn/vant/apple-4.jpg",
        },
        {
          name: "番茄鸡蛋汤",
          picture: "https://img.yzcdn.cn/vant/apple-5.jpg",
        },
        {
          name: "辣白菜五花肉",
          picture: "https://img.yzcdn.cn/vant/apple-6.jpg",
        },
        {
          name: "羊肉抓饭",
          picture: "https://img.yzcdn.cn/vant/apple-7.jpg",
        },
        {
          name: "牛肉炒辣椒",
          picture: "https://img.yzcdn",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {},
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
.adaptive-table{
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
