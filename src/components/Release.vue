<template>
  <div>
    <ApolloQuery 
      :query="query"
      class="flex-container">
      <template slot-scope="{ result: { loading, error, data } }">
        <section :class="['main', { 'data-ready': data }]">
          <span v-if="loading">Loading...</span>
          <span v-else-if="error">An error occured: {{ error }}</span>
          <ReleaseDetails :release="data ? data.lookup.releaseGroup : undefined" />
          <LoadingIndicator v-if="!data" />
        </section>
        <aside 
          v-if="data" 
          class="side">
          <img :src="data.lookup.releaseGroup.coverArtArchive ? data.lookup.releaseGroup.coverArtArchive.front : 'https://via.placeholder.com/420x420'" >
        </aside>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { RELEASE_GROUP_DETAILS } from "../queries.js";
import LoadingIndicator from "./LoadingIndicator";
import ReleaseDetails from "./ReleaseDetails";

export default {
  name: "Release",
  components: {
    LoadingIndicator,
    ReleaseDetails
  },
  data() {
    return {
      query: RELEASE_GROUP_DETAILS(this.$route.params.releaseId)
    };
  }
};
</script>
