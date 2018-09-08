<template>
  <div>
    <ApolloQuery 
      :query="query"
      class="flex-container">
      <template slot-scope="{ result: { loading, error, data } }">
        <section :class="['main', { 'data-ready': data }]">
          <!-- @TODO: why loading state is not working
            <LoadingIndicator v-if="loading" /> -->
          <span v-if="error">An error occured: {{ error }}</span>
          <ArtistDetails :artist="data ? data.lookup.artist : undefined" />
          <section v-if="data">
            <section v-if="data.lookup.artist.releaseGroups">
              <h2 class="title-small">Albums</h2>
              <ul>
                <ReleaseTeaser
                  v-for="release in data.lookup.artist.releaseGroups.edges" 
                  :key="release.node.mbid"
                  :mbid="release.node.mbid"
                  :title="release.node.title"
                  :date="release.node.firstReleaseDate"
                  :type="release.node.primaryType"
                  :image="release.node.coverArtArchive.front ? release.node.coverArtArchive.front : undefined"
                />
              </ul>
            </section>
          </section>
          <LoadingIndicator v-else />
        </section>
        <aside 
          class="side">
          <img
            v-if="data" 
            :src="data.lookup.artist.theAudioDB ? data.lookup.artist.theAudioDB.thumbnail : 'https://via.placeholder.com/420x420'" 
            class="black-n-white" >
        </aside>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { ARTIST_DETAILS } from "../queries.js";
import ArtistDetails from "./ArtistDetails";
import LoadingIndicator from "./LoadingIndicator";
import ReleaseTeaser from "./ReleaseTeaser";

export default {
  name: "Artist",
  components: {
    LoadingIndicator,
    ReleaseTeaser,
    ArtistDetails
  },
  data() {
    return {
      query: ARTIST_DETAILS(this.$route.params.artistId)
    };
  }
};
</script>
