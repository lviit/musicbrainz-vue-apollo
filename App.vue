<template>
  <div>
    <div class="header">
      <router-link class="header__title" :to="{ name: 'home' }">Musicbrainz vue</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};

</script>

<style>
  @import "./node_modules/normalize.css/normalize.css";

  body {
    font-family: 'Geomanist Regular';
    background: black;
    color: white;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .header {
    display: flex;
    padding: 20px 0;
    justify-content: center;
    border-bottom: 3px solid white;
    margin-bottom: 40px;
  }
  .header__title {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-decoration: none;
  }
  .main {
   flex: 0 1 65%;
   padding-right: 60px;
  }
  .side {
    flex: 0 0 35%;
  }
  input {
    padding: 10px;
  }
  input:focus,
  summary:focus {
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    font-size: 20px;
    letter-spacing: 0.6px;
  }
  h1 {
    font-size: 100px;
    margin: 0 0 40px;
    line-height: 1;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 50px;
    margin: 20px 0;
    line-height: 1;
  }
  a {
    color: white;
  }
  p,
  details {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1px;
  }
  summary {
    margin-bottom: 20px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .black-n-white {
    filter: grayscale(100%);
  }
</style>
