import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import VueRouter from "vue-router";
import ApolloClient from "apollo-boost";

import Artist from "./components/Artist";
import Release from "./components/Release";
import Search from "./components/Search";

Vue.use(VueApollo);

const client = new ApolloClient({ uri: "/api" });
const apolloProvider = new VueApollo({
  defaultClient: client
});

const router = new VueRouter({
  routes: [
    { name: "home", path: "/", component: Search },
    { name: "artistDetails", path: "/artist/:artistId", component: Artist },
    { name: "releaseDetails", path: "/release/:releaseId", component: Release }
  ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app",
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});
