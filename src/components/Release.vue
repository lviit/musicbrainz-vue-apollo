<template>
  <ApolloQuery 
    :query="query" 
    class="container">
    <template slot-scope="{ result: { loading, error, data } }">
      <section class="main">
        <span v-if="loading">Loading...</span>
        <span v-else-if="error">An error occured: {{ error }}</span>
        <section v-if="data">
          <h1 class="title-large">{{ data.lookup.releaseGroup.title }}</h1>
          <div class="text-info">
            <span v-if="data.lookup.releaseGroup.primaryType">{{ data.lookup.releaseGroup.primaryType }} by </span>
            <span v-if="data.lookup.releaseGroup.artistCredits[0].name">{{ data.lookup.releaseGroup.artistCredits[0].name }} </span>
            <span v-if="data.lookup.releaseGroup.firstReleaseDate"> • Released {{ data.lookup.releaseGroup.firstReleaseDate }}</span>
          </div>
          <p 
            v-if="data.lookup.releaseGroup.theAudioDB"
            class="text-body" >{{ data.lookup.releaseGroup.theAudioDB.description }}</p>
        </section>
        <LoadingIndicator v-else />
      </section>
      <aside 
        v-if="data" 
        class="side">
        <img :src="data.lookup.releaseGroup.coverArtArchive ? data.lookup.releaseGroup.coverArtArchive.front : 'https://via.placeholder.com/420x420'" >
      </aside>
    </template>
  </ApolloQuery>
</template>

<script>
import { RELEASE_GROUP_DETAILS } from "../queries.js";
import LoadingIndicator from "./LoadingIndicator";

export default {
  name: "ReleaseDetails",
  components: {
    LoadingIndicator
  },
  data() {
    return {
      query: RELEASE_GROUP_DETAILS(this.$route.params.releaseId)
    };
  }
};
</script>
