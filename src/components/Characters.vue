<template>
  <div class="template-container">
    <!-- Character Section -->
    <v-row class="mb-6" justify="center">
      <v-col
        xs="12"
        sm="12"
        md="10"
        lg="5"
        v-for="char in characters"
        v-bind:key="char.id"
      >
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{ char.name }}</v-card-title>

              <v-card-subtitle class="text-left">{{
                char.origin.name
              }}</v-card-subtitle>
              <v-card-text>
                <ul>
                  <li>Gender: {{ char.gender }}</li>
                  <li>Species: {{ char.species }}</li>
                  <li>Type: {{ char.type }}</li>
                  <li>Status: {{ char.status }}</li>
                </ul>
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="170" tile>
              <v-img
                class="img"
                height="auto"
                contain
                :src="char.image"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Prev/ResponsiveSpacing/Next Section -->
    <v-row class="mb-6" justify="center" v-if="info.pages > 1">
      <v-col xs="2" sm="2" md="1" lg="2">
        <v-btn
          v-if="info.prev != null"
          color="primary"
          @click="$emit('prev', info.prev)"
        >
          Prev
        </v-btn>
        <v-btn v-if="info.prev == null" disabled>Prev</v-btn>
      </v-col>

      <v-col xs="4" sm="4" md="6" lg="6">&nbsp;</v-col>

      <v-col xs="2" sm="2" md="1" lg="2">
        <v-btn
          v-if="info.next != null"
          color="primary"
          @click="$emit('next', info.next)"
        >
          Next
        </v-btn>
        <v-btn v-if="info.next == null" disabled>Next</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Characters",
  props: ["characters", "info"],
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0 1rem 0 0;
  list-style-type: none;
  text-align: left;
}

img-holder {
  height: auto;
}
</style>
