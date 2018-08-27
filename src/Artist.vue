<template>
  <ApolloQuery 
    :query="query" 
    class="container">
    <template slot-scope="{ result: { loading, error, data } }">
      <section class="main">
        <LoadingIndicator v-if="loading" />
        <span v-else-if="error">An error occured: {{ error }}</span>
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
              <li 
                v-for="release in data.lookup.artist.releaseGroups.edges" 
                :key="release.node.mbid" 
                class="release" >
                <router-link 
                  :to="{ name: 'releaseDetails', params: { releaseId: release.node.mbid }}" 
                  class="release__title">{{ release.node.title }} ({{ release.node.firstReleaseDate }})</router-link>
                <div class="release__cover">
                  <img :src="release.node.coverArtArchive.front" >
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <aside 
        v-if="data" 
        class="side">
        <img 
          :src="data.lookup.artist.theAudioDB.thumbnail" 
          class="black-n-white" >
      </aside>
    </template>
  </ApolloQuery>
</template>

<script>
import { ARTIST_DETAILS } from "./queries.js";
import LoadingIndicator from "./LoadingIndicator";

export default {
  name: "ArtistDetails",
  components: {
    LoadingIndicator
  },
  data() {
    return {
      query: ARTIST_DETAILS(this.$route.params.artistId)
    };
  },
  computed: {
    // @TODO: fix
    trimmedBio: function() {}
  },
  watch: {
    $route(to, from) {
      console.log(to);
      // react to route changes...
    }
  }
};
</script>

<style scoped>
.releases {
}
.release {
  display: flex;
  height: 100px;
  justify-content: space-between;
}
.release__title {
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 3px;
  text-decoration: none;
  padding: 20px 0;
  border-bottom: 2px solid white;
  flex-grow: 1;
}
.release__cover {
  width: 100px;
}
.artist-info {
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 20px 0;
  line-height: 1.5;
}
</style>
