<template>
  <div>
    <div class="inner-container">
      <p class="description text-body"> MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public. This app uses the Musicbrainz API. GraphQL schema and server provided by graphbrainz, app build using vue, apollo, and parcel along with a bunch of other neat stuff.</p>
      <form 
        class="search" 
        autocomplete="off"
        @submit.prevent="onSubmit">
        <input
          id="keywords"
          v-model="keywords"
          class="keywords"
          type="text"
          placeholder="search for artist"
        >
        <svg 
          class="icon" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20">
          <path 
            d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" 
            fill="white" />
        </svg>
      </form>
      <ApolloQuery 
        v-if="query" 
        :query="query">
        <template slot-scope="{ result: { loading, error, data } }">
          <span v-if="loading">Loading...</span>
          <span v-else-if="error">An error occured: {{ error }}</span>

          <section v-if="data">
            <ul class="results">
              <ArtistTeaser
                v-for="artist in data.search.artists.edges" 
                :key="artist.node.mbid"
                :mbid="artist.node.mbid"
                :name="artist.node.name"
                :begin="artist.node.lifeSpan.begin"
                :end="artist.node.lifeSpan.end"
                :genre="artist.node.theAudioDB && artist.node.theAudioDB.genre"
                :image="artist.node.theAudioDB ? artist.node.theAudioDB.thumbnail : undefined" />
            </ul>
          </section>
          <LoadingIndicator v-else />
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import { SEARCH_ARTISTS } from "../queries.js";
import LoadingIndicator from "./LoadingIndicator";
import ArtistTeaser from "./ArtistTeaser";

export default {
  name: "Search",
  components: {
    LoadingIndicator,
    ArtistTeaser
  },
  data() {
    return {
      keywords: "",
      query: null
    };
  },
  methods: {
    onSubmit() {
      this.query = SEARCH_ARTISTS(this.keywords);
    }
  }
};
</script>

<style scoped>
.inner-container {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  align-items: center;
}
.description {
  text-align: center;
  max-width: 750px;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.keywords {
  padding: 10px 20px;
  background: black;
  border: none;
  border-bottom: 3px solid white;
  font-size: 40px;
  letter-spacing: 2px;
  color: white;
}
.icon {
  height: 25px;
  width: 25px;
  position: absolute;
  right: 20px;
}
::placeholder {
  color: white;
}
.results {
  margin-top: 30px;
}
</style>
