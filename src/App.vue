<template>
  <div>
    <Header />
    <div class="container">
      <transition name="transition">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "../node_modules/normalize.css/normalize.css";
@import "./global.css";
@import "./transitions.css";

.container {
  position: relative;
}

.container > div {
  position: absolute;
  overflow-y: scroll;
  top: 55px;
  height: calc(100vh - 122px);
  width: 100%;
  scrollbar-face-color: gray;
  scrollbar-track-color: black;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.container > div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.container > div::-webkit-scrollbar-thumb {
  background: gray;
}

.container > div::-webkit-scrollbar-track {
  background: black;
}

.container > div > div {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

</style>
