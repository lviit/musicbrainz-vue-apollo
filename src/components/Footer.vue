<template>
  <div class="wrapper">
    <router-link 
      :to="{ name: 'home' }" 
      class="title"> MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public. This app uses the Musicbrainz API. GraphQL schema and server provided by graphbrainz, app build using vue, apollo, and parcel along with a bunch of other neat stuff.</router-link>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.wrapper {
  display: flex;
  padding: 15px 0;
  justify-content: center;
  border-top: 2px solid white;
  background: black;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.title {
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  max-width: 900px;
  text-align: center;
  line-height: 1.5;
}
</style>
