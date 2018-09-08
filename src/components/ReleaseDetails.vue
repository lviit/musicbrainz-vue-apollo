<template>
  <section>
    <h1 class="title-large">{{ release.title }}</h1>
    <div class="text-info">
      <span>{{ release.primaryType }} by </span>
      <span>{{ release.artistCredits[0].name }} </span>
      <span> • Released {{ formattedReleaseDate }}</span>
    </div>
    <p class="text-body" >{{ release.theAudioDB.description }}</p>
  </section>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "ReleaseDetails",
  props: {
    release: {
      type: Object,
      default: function() {
        return {
          title: "",
          primaryType: "",
          artistCredits: [{ name: "" }],
          firstReleaseDate: "",
          theAudioDB: {
            description: ""
          }
        };
      }
    }
  },
  computed: {
    formattedReleaseDate() {
      return format(this.release.firstReleaseDate, "DD.MM.YYYY");
    }
  }
};
</script>
