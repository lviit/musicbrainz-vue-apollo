<template>
  <div class="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index">
        <router-link
          v-if="!breadcrumb.active"
          :to="{ name: breadcrumb.routeName, params: breadcrumb.params}" 
        >{{ breadcrumb.name }}
        </router-link>
        <span v-else>{{ breadcrumb.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "../app.js";

export default {
  name: "Breadcrumb",
  props: {
    routetitles: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    const params = this.$route.params;
    const breadcrumbs = routes
      .filter(route => {
        return (
          (route.name === "artist" && params.artistId) ||
          (route.name === "release" && params.releaseId) ||
          route.name === "Search"
        );
      })
      .map(route => {
        let title = "";
        switch (route.name) {
          case "artist":
            title = this._props.routetitles.artist.name;
            break;
          case "release":
            title = this._props.routetitles.releaseGroup.title;
            break;
          default:
            title = "Search";
        }

        return {
          routeName: route.name,
          name: title,
          params: route.name === "artist" ? params.artistId : params.releaseId,
          active: route.name === this.$route.name
        };
      });
    return {
      breadcrumbs
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font-size: 14px;
}
a,
span {
  text-decoration: none;
  letter-spacing: 2px;
}
li:before {
  content: "/";
  cursor: default;
  margin: 0 5px;
}
</style>