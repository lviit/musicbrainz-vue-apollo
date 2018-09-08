<template>
  <section>
    <h1 class="title-large">{{ artist.name }}</h1>
    <div class="text-info artist-info">
      <span>{{ artist.theAudioDB.genre }} • </span>
      <span>{{ artist.beginArea.name }}, </span>
      <span>{{ artist.area.name }} </span>
      <span> • Years active: {{ formattedBegin }} - {{ formattedEnd || 'present' }}</span>
    </div>
    <details class="text-body">
      <summary class="text-teaser">{{ `${artist.theAudioDB.biography.slice(0, 400)}...` }}</summary>
      {{ artist.theAudioDB.biography.slice(400) }}
    </details>
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
  computed: {
    formattedBegin() {
      return format(this.artist.lifeSpan.begin, "YYYY");
    },
    formattedEnd() {
      return format(this.artist.lifeSpan.end, "YYYY");
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
</style>
