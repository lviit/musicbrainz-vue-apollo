<template>
  <ApolloQuery class="container" :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <section class="main">
        <span v-if="loading">Loading...</span>
        <span v-else-if="error">An error occured: {{ error }}</span>
        <section v-if="data">
          <h1>{{ data.lookup.releaseGroup.title }}</h1>
          <div class="release-info">
            <span v-if="data.lookup.releaseGroup.primaryType">{{ data.lookup.releaseGroup.primaryType }} by </span>
            <span v-if="data.lookup.releaseGroup.artistCredits[0].name">{{ data.lookup.releaseGroup.artistCredits[0].name }} </span>
            <span v-if="data.lookup.releaseGroup.firstReleaseDate"> • Released {{ data.lookup.releaseGroup.firstReleaseDate }}</span>
          </div>
          <p v-if="data.lookup.releaseGroup.theAudioDB" >{{ data.lookup.releaseGroup.theAudioDB.description }}</p>
        </section>
      </section>
      <aside v-if="data" class="side">
        <img :src="data.lookup.releaseGroup.coverArtArchive.front" />
      </aside>
    </template>
  </ApolloQuery>
</template>

<script>
import { RELEASE_GROUP_DETAILS } from "./queries.js";

export default {
  name: "releaseDetails",
  watch: {
    '$route' (to, from) {
      console.log(to);
      // react to route changes...
    }
  },
  data() {
    return {
      query: RELEASE_GROUP_DETAILS(this.$route.params.releaseId)
    };
  }
};
</script>

<style scoped>
  .release-info {
    letter-spacing: 3px;
    text-transform: uppercase;
  }
</style>
