<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/rick-and-morty">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-alpha-r-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Rick & Morty</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/studio-ghibli">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-alpha-s-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Studio Ghibli</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/jsonplaceholder">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-code-braces</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jsonplaceholder</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <!-- Router content -->
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="col text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
