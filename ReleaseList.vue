<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured: {{ error }}</span>

      <section v-if="data">
          <ul>
            <li v-for="release in data.lookup.artist.releaseGroups.edges" >
              {{ release.node.title }} - {{ release.node.firstReleaseDate }}
            </li>
          </ul>
      </section>
    </template>
  </ApolloQuery>
</template>

<script>
import { NIRVANA_ALBUM_SINGLES } from "./queries.js";

export default {
  name: "query",
  data() {
    return {
      query: NIRVANA_ALBUM_SINGLES
    };
  }
};
</script>

<style scoped>
</style>
