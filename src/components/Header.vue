<template>
  <div class="container">
    <router-link 
      :to="{ name: 'home' }" 
      class="title">Musicbrainz vue</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 20px 0;
  justify-content: center;
  border-bottom: 3px solid white;
  margin-bottom: 40px;
}

.title {
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-decoration: none;
}
</style>
