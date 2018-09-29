<template>
  <section>
    <h1 class="title-large">{{ artist.name }}</h1>
    <div class="text-info artist-info">
      <span>{{ artist.theAudioDB.genre }} • </span>
      <span>{{ artist.beginArea.name }}, </span>
      <span>{{ artist.area.name }} </span>
      <span> • Years active: {{ formattedBegin }} - {{ formattedEnd || 'present' }}</span>
    </div>
    <div
      v-if="state.showFullBiography"
      class="text-body">
      {{ artist.theAudioDB.biography }}
    </div>
    <div v-else>
      <div class="text-body">
        {{ biographyTeaser }}
      </div>
      <button
        class="readmore"
        @click="readmore">Read more</button>
    </div>
  </section>

</template>

<script>
import { format } from "date-fns";

export default {
  name: "ArtistDetails",
  props: {
    artist: {
      type: Object,
      default: function() {
        return {
          name: "",
          area: {
            name: ""
          },
          beginArea: {
            name: ""
          },
          lifeSpan: {
            begin: "",
            end: ""
          },
          theAudioDB: {
            biography: "",
            genre: ""
          }
        };
      }
    }
  },
  data() {
    return {
      state: { showFullBiography: false }
    };
  },
  computed: {
    formattedBegin() {
      return format(this.artist.lifeSpan.begin, "YYYY");
    },
    formattedEnd() {
      return format(this.artist.lifeSpan.end, "YYYY");
    },
    biographyTeaser() {
      return this.artist.theAudioDB.biography.slice(0, 400);
    }
  },
  methods: {
    readmore: function() {
      this.state.showFullBiography = true;
    }
  }
};
</script>

<style scoped>
.artist-info {
  margin: 20px 0;
}
.text-teaser {
  margin-bottom: 20px;
}
.readmore {
  background: transparent;
  color: white;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 20px;
  letter-spacing: 1px;
  border: 2px solid white;
  cursor: pointer;
}
</style>
