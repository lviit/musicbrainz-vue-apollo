<template>
  <li class="release" >
    <div class="info">
      <router-link 
        :to="{ name: 'release', params: { releaseId: mbid }}" 
        class="title">{{ title }}
      </router-link>
      <div class="details">
        <span>{{ type }} {{ type && "•" }}</span>
        <span>{{ formattedDate }}</span>
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
  name: "ReleaseTeaser",
  props: {
    mbid: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    date: {
      type: String,
      required: false,
      default: ""
    },
    image: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/150x150"
    }
  },
  computed: {
    formattedDate() {
      return format(this.date, "YYYY");
    }
  }
};
</script>

<style scoped>
.release {
  display: flex;
  height: 100px;
  justify-content: space-between;
}
.title {
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 3px;
  text-decoration: none;
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
.image {
  width: 100px;
}
</style>
