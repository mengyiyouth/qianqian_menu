<template>
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
      return this.$store.state.newOrderData;
    }
  },
};
</script> 
