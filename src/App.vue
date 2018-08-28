<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
@import "../node_modules/normalize.css/normalize.css";
@import "./global.css";
</style>
