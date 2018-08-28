<template>
  <li class="artist" >
    <div class="info">
      <router-link 
        :to="{ name: 'artistDetails', params: { artistId: mbid }}" 
        class="name">{{ name }}
      </router-link>
      <div class="details">
        <span>{{ genre }} {{ genre && "•" }}</span>
        <span>{{ formattedBegin }} - {{ formattedEnd }}</span>
      </div>
    </div>
    <div class="image">
      <img :src="image" >
    </div>
  </li>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "ArtistTeaser",
  props: {
    mbid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: false,
      default: ""
    },
    begin: {
      type: String,
      required: false,
      default: ""
    },
    end: {
      type: String,
      required: false,
      default: "present"
    },
    image: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/150x150"
    }
  },
  computed: {
    formattedBegin() {
      return format(this.begin, "YYYY");
    },
    formattedEnd() {
      return format(this.end, "YYYY");
    }
  }
};
</script>

<style scoped>
.artist {
  display: flex;
  height: 100px;
  justify-content: space-between;
  width: 600px;
}
.info {
  padding: 20px 0;
  border-bottom: 2px solid white;
  flex-grow: 1;
}
.details {
  font-size: 14px;
  margin-top: 5px;
  letter-spacing: 2px;
}
.name {
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 3px;
  text-decoration: none;
}
.image {
  width: 100px;
}
</style>
