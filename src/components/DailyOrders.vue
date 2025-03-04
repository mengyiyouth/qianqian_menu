<template>
  <v-card title="Only For 77" flat class="responsive-card">
    <template v-slot:text>
      <v-row>
        <v-col cols="7">
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
          <v-btn color="primary" @click="addNewDish">Add</v-btn>
        </v-col>
        <v-col cols="2">
          <v-icon @click="dateMenu = true">mdi-calendar</v-icon>
          <!-- Display date -->
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="250"
          >
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on" style="display: none"></div>
            </template>
            <v-date-picker v-modle="date" width="250" height="250"
            @input="dateMenu = false" />
          </v-menu>
        </v-col>
      </v-row>
    </template>
    <v-data-table
      :items="newOrderData"
      :headers="headers"
      :search="search"
      :filter-keys="['name']"
      item-value="id"
      class="adaptive-table"
    >
      <template v-slot:[`item.picture`]="{ item }">
        {{ console.log(item) }}
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
      date: "",
      headers: [
        { title: "Name", key: "name", align: "center" },
        { title: "Picture", key: "picture", align: "center" },
      ],
    };
  },
  method: {},
  mounted() {},
  computed: {
    newOrderData() {
      return this.$store.getters.getNewOrderData;
    },
  },
};
</script>
