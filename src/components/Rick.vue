<template>
  <div>
    <h2 class="mt-12 mb-6">My favorite Rick & Morty characters</h2>

    <Characters
      v-bind:characters="characters"
      v-bind:info="info"
      v-on:prev="Prev"
      v-on:next="Next"
    />

    <v-col xs="12" sm="12" md="12" lg="12" class="mt-14">
      <h2>Search for rick and morty characters</h2>
    </v-col>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="mb-6 mr-10 ml-10" justify="center">
        <v-col xs="12" sm="12" md="5" lg="6">
          <v-text-field
            v-model="name"
            :counter="45"
            :rules="nameRules"
            label="Name"
          ></v-text-field>
        </v-col>

        <v-col xs="12" sm="12" md="3" lg="2">
          <v-select
            v-model="genderSelect"
            :items="genderItems"
            label="Gender"
          ></v-select>
        </v-col>

        <v-col xs="12" sm="12" md="5" lg="6">
          <v-text-field v-model="species" label="Species"></v-text-field>
        </v-col>

        <v-col xs="12" sm="12" md="3" lg="2">
          <v-select
            v-model="statusSelect"
            :items="statusItems"
            label="Status"
          ></v-select>
        </v-col>

        <v-col xs="12" sm="12" md="12" lg="12">
          <v-btn color="success" @click="characterSearch">Search</v-btn>
        </v-col>

        <!-- <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field> -->
        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox> -->

        <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
      </v-row>
    </v-form>

    <Characters
      v-bind:characters="characterSearchData"
      v-bind:info="characterSearchDataInfo"
      v-on:prev="Prev"
      v-on:next="Next"
    />
  </div>
</template>

<script>
import axios from "axios";

import Characters from "./Characters";

export default {
  name: "Rick",

  components: { Characters },

  data: () => ({
    info: { pages: 0 },
    characters: [],
    characterSearchData: [],
    characterSearchDataInfo: {},
    valid: true,
    // email: "",
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    // ],
    name: "",
    species: "",
    statusSelect: null,
    genderSelect: null,
    statusItems: ["Alive", "Dead", "Either"],
    genderItems: ["Male", "Female", "Either"],
    nameRules: [
      (v) => (v && v.length <= 45) || "Name must be no more than 45 characters",
    ],
    checkbox: false,
  }),

  created() {
    let favorites = [1, 2, 242, 58, 474, 78, 473, 48, 47, 283, 136, 108];
    for (let i = 0; i < favorites.length; i++) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${favorites[i]}`)
        .then((res) => {
          this.characters = [...this.characters, res.data];
        })
        .catch((err) => console.log(err));
    }
  },

  methods: {
    characterSearch() {
      console.log(`Clicked the search button!`);
      if (this.$refs.form.validate) {
        // Iterate over the data to pull out the nulls and undefined to fix the string for the search
        let charData = [
          this.name,
          this.species,
          this.genderSelect,
          this.statusSelect,
        ];
        // Check each for nulls, undefined, and either
        for (let i = 0; i < charData.length; i++) {
          if (
            charData[i] == null ||
            charData[i] == undefined ||
            charData[i] == "Either"
          )
            charData[i] = "";
        }
        // After mutating data for api call, plug it into the url
        axios
          .get(
            `https://rickandmortyapi.com/api/character?name=${charData[0]}&species=${charData[1]}&gender=${charData[2]}&status=${charData[3]}`
          )
          .then((res) => {
            this.characterSearchData = res.data.results;
            this.characterSearchDataInfo = res.data.info;
            console.log(`Here's the info`, this.characterSearchDataInfo);
          })
          .catch((err) => console.log(err));

        this.$refs.form.reset();
      }
    },
    Prev(prev) {
      axios
        .get(prev)
        .then((res) => {
          this.characterSearchData = res.data.results;
          this.characterSearchDataInfo = res.data.info;
        })
        .catch((err) => console.log(err));
    },
    Next(next) {
      axios
        .get(next)
        .then((res) => {
          this.characterSearchData = res.data.results;
          this.characterSearchDataInfo = res.data.info;
        })
        .catch((err) => console.log(err));
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: 300;
}
</style>
