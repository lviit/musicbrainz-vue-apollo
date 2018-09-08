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

export const routes = [
  { name: "Search", path: "/", component: Search },
  { name: "artist", path: "/artist/:artistId", component: Artist },
  {
    name: "release",
    path: "/artist/:artistId/release/:releaseId",
    component: Release
  }
];

const router = new VueRouter({ routes });

Vue.use(VueRouter);

new Vue({
  el: "#app",
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});
