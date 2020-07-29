<template>
  <div class="template-container">
    <v-row class="mb-6" justify="center" v-for="film in films" v-bind:key="film.id">
      <v-col xs="12" sm="12" md="12" lg="12" class="mt-14">
        <h2>{{ film.title }}</h2>
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="3">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="film.img"></v-img>

          <v-card-title class="card-title">{{ film.title }}</v-card-title>
          <v-card-subtitle class="text-left">Director: {{ film.director }}</v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0 mt-0 mb-4">
              <v-rating :value="film.rating" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">{{ film.rating }}</div>
            </v-row>

            <h2 class="text-left mb-4">Summary</h2>
            <div>{{ film.description }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title class="card-title">Tonight's availability</v-card-title>
          <v-card-text></v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="8" lg="9" v-if="film.people != null">
        <v-row class="mb-6" justify="center" dense>
          <v-col xs="12" sm="12" md="12" lg="12">
            <v-card dark class="mt-5">
              <v-card-title class="card-title">Characters</v-card-title>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="4" lg="3" v-for="ppl in film.peopleData" v-bind:key="ppl.id">
            <v-card dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline card-title">{{ ppl.name }}</v-card-title>
                  <v-card-subtitle class="text-left">{{ film.title }}</v-card-subtitle>
                  <v-card-text>
                    <ul>
                      <li>Age: {{ ppl.age }}</li>
                      <li>Gender: {{ ppl.gender }}</li>
                      <li>Eye Color: {{ ppl.eye_color }}</li>
                      <li>Heir Color: {{ ppl.hair_color }}</li>
                    </ul>
                  </v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- If there aren't any people, species, locations, or vehicles -->
      <v-col xs="12" sm="12" md="8" lg="9" v-else>
        <v-row class="mb-6" justify="center" dense>
          <v-col xs="12" sm="12" md="6" lg="3">
            <v-card dark class="mt-5">
              <v-card-title class="card-title">People</v-card-title>
              <v-card-text>The api has no data on the people in this film</v-card-text>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="6" lg="3">
            <v-card dark class="mt-5">
              <v-card-title class="card-title">Species</v-card-title>
              <v-card-text>The api has no data on the species in this film</v-card-text>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="6" lg="3">
            <v-card dark class="mt-5">
              <v-card-title class="card-title">Locations</v-card-title>
              <v-card-text>The api has no data on the locations in this film</v-card-text>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="6" lg="3">
            <v-card dark class="mt-5">
              <v-card-title class="card-title">Vehicles</v-card-title>
              <v-card-text>The api has no data on the vehicles in this film</v-card-text>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="6" lg="3" v-for="iter of 4" v-bind:key="iter">
            <v-card dark>
              <v-card-title class="card-title">Example data</v-card-title>
              <v-card-subtitle class="text-left">Don't fret!</v-card-subtitle>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>The is data on the subject, but none is connected to the specific film within the api. It's odd but only a couple films have the data connected to the id of each film</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- If there are species-->
      <v-row class="mb-6" justify="center" v-if="film.species != null">
        <v-col xs="12" sm="11" md="10" lg="10">
          <v-card dark class="mt-5">
            <v-card-title class="card-title">Species in {{film.title}}</v-card-title>
          </v-card>
        </v-col>

        <v-col xs="12" sm="12" md="4" lg="3" v-for="spe in film.speciesData" v-bind:key="spe.id">
          <v-card dark>
            <v-card-title class="headline card-title">{{ spe.name }}</v-card-title>
            <v-card-subtitle class="text-left">{{ spe.classification }}</v-card-subtitle>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle class="text-left">Characteristics</v-card-subtitle>
            <v-card-text class="card-text-padding">
              <ul>
                <li class="subtitle">Eye Colors</li>
                <li class="desc">{{ spe.eye_colors }}</li>
                <li class="subtitle">Hair Colors</li>
                <li class="desc">{{ spe.hair_colors }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Films",
  props: ["films"],
  data: () => ({}),
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
.card-title {
  font-weight: 300;
}

ul,
li {
  list-style: none;
  text-align: left;
  padding: none;
  margin: none;
}

.card-text-padding {
  padding-left: 0;
}

.subtitle {
  font-weight: bold;
}
.desc {
  padding-left: 1rem;
}
</style>
