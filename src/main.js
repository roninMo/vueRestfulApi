import Vue from "vue";
import App from "./App.vue";

import router from "./router";

// Different plugins for the project
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
