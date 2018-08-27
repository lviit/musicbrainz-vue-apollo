<template>
  <ApolloQuery 
    :query="query"
    class="container">
    <template slot-scope="{ result: { loading, error, data } }">
      <section class="main">
        <!-- @TODO: why loading state is not working
          <LoadingIndicator v-if="loading" /> -->
        <span v-if="error">An error occured: {{ error }}</span>
        <section v-if="data">
          <h1>{{ data.lookup.artist.name }}</h1>
          <div class="artist-info">
            <span v-if="data.lookup.artist.theAudioDB">{{ data.lookup.artist.theAudioDB.genre }} • </span>
            <span v-if="data.lookup.artist.beginArea">{{ data.lookup.artist.beginArea.name }}, </span>
            <span v-if="data.lookup.artist.area">{{ data.lookup.artist.area.name }} </span>
            <span v-if="data.lookup.artist.lifeSpan.begin"> • Years active {{ data.lookup.artist.lifeSpan.begin }} - {{ data.lookup.artist.lifeSpan.end || 'present' }}</span>
          </div>
          <details>
            <summary>{{ `${data.lookup.artist.theAudioDB.biography.slice(0, 400)}...` }}</summary>
            {{ data.lookup.artist.theAudioDB.biography.slice(200) }}
          </details>
          <section v-if="data.lookup.artist.releaseGroups">
            <h2>Albums</h2>
            <ul class="releases">
              <ReleaseTeaser
                v-for="release in data.lookup.artist.releaseGroups.edges" 
                :key="release.node.mbid"
                :mbid="release.node.mbid"
                :title="release.node.title"
                :date="release.node.firstReleaseDate"
                :type="release.node.primaryType"
                :image="release.node.coverArtArchive.front"
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
          :src="data.lookup.artist.theAudioDB.thumbnail" 
          class="black-n-white" >
        <div
          v-else
          class="main-image-placeholder" />
      </aside>
    </template>
  </ApolloQuery>
</template>

<script>
import { ARTIST_DETAILS } from "../queries.js";
import LoadingIndicator from "./LoadingIndicator";
import ReleaseTeaser from "./ReleaseTeaser";

export default {
  name: "ArtistDetails",
  components: {
    LoadingIndicator,
    ReleaseTeaser
  },
  data() {
    return {
      query: ARTIST_DETAILS(this.$route.params.artistId)
    };
  }
};
</script>

<style scoped>
.artist-info {
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 20px 0;
  line-height: 1.5;
}
.main-image-placeholder {
  max-width: 420px;
  height: 420px;
  color: gray;
}
</style>
