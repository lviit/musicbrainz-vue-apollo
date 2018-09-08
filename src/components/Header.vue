<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <router-link 
        :to="{ name: 'Search' }" 
        class="title">Musicbrainz vue
      </router-link>
      <ApolloQuery :query="breadcrumbs">
        <template slot-scope="{ result: { loading, error, data } }">
          <Breadcrumbs v-if="data" :routetitles="data.lookup" />
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "./Breadcrumbs";
import { BREADCRUMB } from "../queries.js";

export default {
  name: "Header",
  components: {
    Breadcrumbs
  },
  data() {
    return { breadcrumbs: BREADCRUMB(this.$route.params) };
  }
};
</script>

<style scoped>
.wrapper {
  padding: 15px 0;
  border-bottom: 2px solid white;
  background: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.inner-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.title {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-decoration: none;
}
</style>
