import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import App from './App.vue';
import VueRouter from "vue-router";

import Artist from "./Artist";
import Release from "./Release";
import Form from "./Form";

const geomanistRegular = new FontFace('Geomanist Regular', 'url(./fonts/geomanist-regular-webfont.woff2)', {
  style: 'normal',
  weight: '400'
});

document.fonts.add(geomanistRegular);
geomanistRegular.load();

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000" }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Form },
    { name: 'artistDetails', path: '/artist/:artistId', component: Artist },
    { name: 'releaseDetails',path: '/release/:releaseId', component: Release },
  ]
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});
