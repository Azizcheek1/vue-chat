<template>
  <div class="home">
    <Navbar v-if="show_navbar" />
    <Sidebar v-if="show_sidebar" />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    show_navbar() {
      return this.$store.getters.show_navbar;
    },
    show_sidebar() {
      return this.$store.getters.show_sidebar;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.home {
}
</style>
