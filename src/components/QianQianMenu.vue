<template>
  <v-btn @click="showDailyOrders = !showDailyOrders">{{
    showDailyOrders ? "Show Menu" : "Show Daily Orders"
  }}</v-btn>
  <component :is="currentComponent"></component>
  <v-container
    v-if="!showDailyOrders"
    class="d-flex justify-center align-center fill-height"
  >
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
            <v-btn color="primary" @click="palceAndOrder">Order </v-btn>
            <v-btn color="primary" @click="addNewDish">Add</v-btn>
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
        <template v-slot:[`item.picture`]="{ item }">
          <v-img :src="item.picture" width="100" height="70"></v-img>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="showOrderDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Order Summary</span>
        </v-card-title>
        <v-card-text>
          <v-date-input></v-date-input>

          <v-form>
            <!-- <div v-if="selected.length">
              <p>You have selected the following items:</p>
              <ul>
                <li v-for="item in selected" :key="item">{{ item.name }}</li>
              </ul>
            </div>
            <div v-else>
              <p>No items selected.</p>
            </div> -->
          </v-form>
        </v-card-text>
        <!-- <v-date-picker v-model="date"></v-date-picker> -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="showOrderDialog = false"
            >Close</v-btn
          >
          <v-btn
            color="surface-variant"
            text="Save"
            variant="flat"
            @click="generateNewOrder"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showAddDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">添加新菜品</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="newDish.name"
              label="菜品"
              variant="outlined"
              required
            ></v-text-field>
            <v-file-input
              v-model="newDish.picture"
              label="Picture"
              variant="outlined"
              accept="image/*"
              @change="onFileChange"
              required
            ></v-file-input>
            <v-text-field
              v-model="newDish.calories"
              label="卡路里"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="newDish.fat"
              label="脂肪 (克)"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="newDish.carbs"
              label="碳 (克)"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="newDish.protein"
              label="蛋白质 (克)"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="newDish.iron"
              label="铁 (克)"
              variant="outlined"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showAddDialog = false"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="saveNewDish">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import DailyOrders from "@/components/DailyOrders.vue";
import { format } from "date-fns";
export default {
  data() {
    return {
      showDailyOrders: false,
      showOrderDialog: false,
      showAddDialog: false,
      selected: [],
      newDish: {
        name: "",
        picture: "",
        calories: "",
        fat: "",
        carbs: "",
        protein: "",
        iron: "",
      },
      date: null,
      search: "",
      headers: [
        { title: "菜品", key: "name", align: "center" },
        { title: "图片", key: "picture", align: "center" },
        { title: "卡路里", key: "calories", align: "center" },
        { title: "脂肪 (克)", key: "fat", align: "center" },
        { title: "碳 (克)", key: "carbs", align: "center" },
        { title: "蛋白质 (克)", key: "protein", align: "center" },
        { title: "铁 (克)", key: "iron", align: "center" },
      ],
      menuList: [
        {
          id: "1",
          name: "酸菜五花肉",
          picture: "",
          calories: "105",
          fat: "1",
          carbs: "1",
          protein: "1",
          iron: "1",
        },
        {
          id: "2",
          name: "凉拌牛肉",
          picture: "",
        },
        // {
        //   id: "3",
        //   name: "排骨炖豆角",
        //   picture: "",
        // },
        // {
        //   id: "4",
        //   name: "番茄炖牛肉",
        //   picture: "",
        // },
        // {
        //   id: "5",
        //   name: "番茄鸡蛋汤",
        //   picture: "",
        // },
        // {
        //   id: "6",
        //   name: "辣白菜五花肉",
        //   picture: "",
        // },
        // {
        //   id: "7",
        //   name: "羊肉抓饭",
        //   picture: "",
        // },
        // {
        //   id: "8",
        //   name: "牛肉炒辣椒",
        //   picture: "",
        // },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    palceAndOrder() {
      if (this.selected.length === 0) {
        alert("Please select at least one item");
        return;
      }
      this.showOrderDialog = true;
    },
    addNewDish() {
      this.showAddDialog = true;
    },
    saveNewDish() {
      if (!this.menuList.find((dish) => dish.name === this.newDish.name)) {
        this.menuList.push({
          id: this.menuList.length + 1,
          name: this.newDish.name,
          picture: this.newDish.picture,
        });
        this.showAddDialog = false;
        this.newDish = {
          id: "",
          name: "",
          picture: "",
        };
      } else {
        alert("Dish already exists");
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newDish.picture = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    generateNewOrder() {
      this.showDailyOrders = true;
      this.showOrderDialog = false;
      this.$store.commit("setNewOrderData", this.selected);
      let dateStr = this.formateDate();
      this.selected = [];
      this.$store.commit("setOrderDate", dateStr);
    },
    formateDate() {
      return format(new Date(this.date), "yyyy-MM-dd");
    },
  },
  computed: {
    currentComponent() {
      return this.showDailyOrders ? DailyOrders : null;
    },
  },
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
